import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Configuration, InventoryService, ShortDraft} from '../inventory.service';

export enum DialogAction {
  Cancel = 1,
  Save,
  SaveAndUpload,
}

@Component({
  selector: 'app-edit-as-draft-dialog',
  templateUrl: './edit-as-draft-dialog.component.html',
  styleUrls: ['./edit-as-draft-dialog.component.scss']
})
export class EditAsDraftDialogComponent implements OnInit {
  ip: string;
  label = new FormControl('', Validators.required);
  annotation = new FormControl('');
  content = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<EditAsDraftDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public configurations: Configuration[],
              public service: InventoryService) {
  }

  ngOnInit() {
    this.ip = this.configurations[0].ip;
    const commands = this.configurations[0].commands;
    this.content.setValue(commands.join('\n'));
  }

  save() {
    const shortDraft: ShortDraft = {ip: this.ip, label: this.label.value, annotation: this.annotation.value, content: this.content.value};
    this.service.saveDraft(shortDraft);
    this.dialogRef.close();
  }

  saveAndUpload() {
    const shortDraft: ShortDraft = {ip: this.ip, label: this.label.value, annotation: this.annotation.value, content: this.content.value};
    this.service.uploadDraft(shortDraft);
    this.dialogRef.close(DialogAction.SaveAndUpload);
  }

}
