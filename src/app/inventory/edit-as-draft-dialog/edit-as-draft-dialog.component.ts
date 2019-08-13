import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Configuration, InventoryService, ShortDraft} from '../inventory.service';
import {of} from 'rxjs';

export enum DialogAction {
  Cancel = 1,
  Save,
  SaveAndUpload,
}

export const uniqueLabelIpPairValidator = (service: InventoryService, changeRef: ChangeDetectorRef) => {
  return (control: FormGroup) => {
    return of({uniqueLabelIpPair: true});
  };
};

@Component({
  selector: 'app-edit-as-draft-dialog',
  templateUrl: './edit-as-draft-dialog.component.html',
  styleUrls: ['./edit-as-draft-dialog.component.scss']
})
export class EditAsDraftDialogComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    ip: new FormControl(''),
    label: new FormControl('', [Validators.required]),
    annotation: new FormControl(''),
    content: new FormControl('', Validators.required),
  }, [], [uniqueLabelIpPairValidator(this.service, this.changeRef)]);

  constructor(public dialogRef: MatDialogRef<EditAsDraftDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public configurations: Configuration[],
              public service: InventoryService,
              private changeRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    window['fg'] = this.formGroup;
    const commands = this.configurations[0].commands;
    this.formGroup.patchValue({
      ip: this.configurations[0].ip,
      content: commands.join('\n'),
    });
  }

  save() {
    const shortDraft: ShortDraft = {ip: this.formGroup.get('ip').value, label: this.formGroup.get('label').value, annotation: this.formGroup.get('annotation').value, content: this.formGroup.get('content').value};
    this.service.saveDraft(shortDraft);
    this.dialogRef.close();
  }

  saveAndUpload() {
    const shortDraft: ShortDraft = {ip: this.formGroup.get('ip').value, label: this.formGroup.get('label').value, annotation: this.formGroup.get('annotation').value, content: this.formGroup.get('content').value};
    this.service.uploadDraft(shortDraft);
    this.dialogRef.close(DialogAction.SaveAndUpload);
  }

}
