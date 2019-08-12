import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Configuration} from '../inventory.service';

@Component({
  selector: 'app-edit-as-draft-dialog',
  templateUrl: './edit-as-draft-dialog.component.html',
  styleUrls: ['./edit-as-draft-dialog.component.scss']
})
export class EditAsDraftDialogComponent implements OnInit {
  draftName = new FormControl('', Validators.required);
  annotation = new FormControl('');
  content = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<EditAsDraftDialogComponent>, @Inject(MAT_DIALOG_DATA) public configurations: Configuration[]) {
  }

  ngOnInit() {
    const commands = this.configurations[0].commands;
    this.content.setValue(commands.join('\n'));
  }

  save() {
    // TODO: save by service then close the dialog.
    this.dialogRef.close({draftName: this.draftName.value, annotation: this.annotation.value, content: this.content.value});
  }

}
