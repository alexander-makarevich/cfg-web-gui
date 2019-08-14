import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Configuration, InventoryService, ShortDraft} from '../inventory.service';
import {catchError, map} from 'rxjs/operators';

export enum DialogAction {
  Cancel = 1,
  Save,
  SaveAndUpload,
}

export const uniqueLabelIpPairValidator = (service: InventoryService) => {
  return (control: FormGroup) => {
    const ip: string = control.get('ip').value;
    const label: string = control.get('label').value;

    return service.isLabelIpPairUnique(ip, label).pipe(
      map(isUnique => (isUnique ? null : {notUniqueLabelIpPair: true})),
      catchError(() => null),
    );
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
  }, [], [uniqueLabelIpPairValidator(this.service)]);

  constructor(public dialogRef: MatDialogRef<EditAsDraftDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public configurations: Configuration[],
              public service: InventoryService) {
  }

  ngOnInit() {
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
