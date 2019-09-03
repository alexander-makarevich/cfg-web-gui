import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

import {Configuration, Draft, InventoryService, ShortDraft} from '../inventory.service';
import {debounceTime, delay, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {clishLanguageId, monacoEditorLag} from "./monaco-editor-config";
import {ClishService} from "./clish.service";

export enum DialogAction {
  Cancel = 1,
  Save,
  SaveAndUpload,
}

export enum DialogType {
  EditConfigurationAsDraft = 0,
  EditDraft,
  CreateNewDraft,
}

export function transformConfigurationToShortDraft(configuration: Configuration): ShortDraft {
  return {
    draftId: null,
    annotation: '',
    ip: configuration.ip,
    labels: [],
    content: configuration.commands.join('\n'),
  };
}

export function transformDraftToShortDraft(draft: Draft): ShortDraft {
  return {
    draftId: draft.id,
    annotation: draft.annotation,
    ip: draft.ip,
    labels: draft.labels,
    content: draft.commands.join('\n'),
  };
}

export interface DialogData {
  type: DialogType;
  shortDraft: ShortDraft;
}

@Component({
  selector: 'app-edit-as-draft-dialog',
  templateUrl: './edit-as-draft-dialog.component.html',
  styleUrls: ['./edit-as-draft-dialog.component.scss']
})
export class EditAsDraftDialogComponent implements OnInit {
  editorOptions = {theme: 'vs', language: clishLanguageId, colorDecorators: true, };

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  labels: string[] = [];

  public hasLabelError = false;
  private labelIsDuplicated$: Observable<boolean>;
  private newLabelSource = new Subject<string>();

  formGroup: FormGroup = new FormGroup({
    ip: new FormControl(''),
    annotation: new FormControl(''),
    content: new FormControl('', Validators.required),
    code: new FormControl('function x() {\nconsole.log("Hello world!");\n}', Validators.required),
  });

  DialogType = DialogType;

  constructor(public dialogRef: MatDialogRef<EditAsDraftDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public inventoryService: InventoryService,
              private clishService: ClishService) {
  }

  onMonacoEditorInit(editor) {
    const model = editor.getModel();
    const configuration = editor.getValue();

    this.clishService.getMarkers(configuration)
      .pipe(delay(monacoEditorLag))
      .subscribe(markers => monaco.editor.setModelMarkers(model, clishLanguageId, markers));

    model.onDidChangeContent((a) => {
      const configuration = editor.getValue();
      this.clishService.getMarkers(configuration)
        .pipe(delay(monacoEditorLag))
        .subscribe(markers => monaco.editor.setModelMarkers(model, clishLanguageId, markers));
    });
  }

  /**
   * add label to labels chips control
   */
  add(event: MatChipInputEvent): void {
    if (this.hasLabelError) {
      return;
    }

    const input = event.input;
    const value = event.value;

    // Add our label
    if ((value || '').trim()) {
      this.labels.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /**
   * remove label from chips labels
   */
  remove(label: string): void {
    const index = this.labels.indexOf(label);

    if (index >= 0) {
      this.labels.splice(index, 1);
    }
  }

  validateNewLabel(label: string) {
    this.newLabelSource.next(label);
  }


  ngOnInit() {
    this.labels = this.data.type === DialogType.EditDraft ? [...this.data.shortDraft.labels] : [];

    this.formGroup.patchValue({
      ip: this.data.shortDraft.ip,
      content: this.data.shortDraft.content,
      annotation: this.data.type === DialogType.EditDraft ? this.data.shortDraft.annotation : '',
    });

    this.labelIsDuplicated$ = this.newLabelSource.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((newLabel: string) => this.inventoryService.isLabelIpPairDuplicated('192.168.1.4', newLabel, [])),
      tap(duplicated => this.hasLabelError = duplicated)
    );
  }

  save() {
    const shortDraft: ShortDraft = {
      draftId: this.data.shortDraft.draftId,
      ip: this.formGroup.get('ip').value,
      labels: this.labels,
      annotation: this.formGroup.get('annotation').value,
      content: this.formGroup.get('content').value
    };

    switch (this.data.type) {
      case DialogType.EditDraft:
        this.inventoryService.saveDraft(shortDraft).subscribe(() => this.dialogRef.close(DialogAction.Save));
        break;

      case DialogType.CreateNewDraft:
      case DialogType.EditConfigurationAsDraft:
        this.inventoryService.createDraft(shortDraft).subscribe(() => this.dialogRef.close());
        break;
    }
  }

  saveAndUpload() {
    const shortDraft: ShortDraft = {
      draftId: this.data.type === DialogType.EditDraft ? this.data.shortDraft.draftId : null,
      ip: this.formGroup.get('ip').value,
      labels: this.labels,
      annotation: this.formGroup.get('annotation').value,
      content: this.formGroup.get('content').value
    };

    this.inventoryService.uploadDraft(shortDraft).subscribe(() => this.dialogRef.close(DialogAction.SaveAndUpload));
  }

}
