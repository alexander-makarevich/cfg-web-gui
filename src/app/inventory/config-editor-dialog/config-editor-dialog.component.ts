import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {CONFIG_DATA, Device} from '../inventory.service';

@Component({
  selector: 'app-config-editor-dialog',
  templateUrl: './config-editor-dialog.component.html',
  styleUrls: ['./config-editor-dialog.component.scss']
})
export class ConfigEditorDialogComponent implements OnInit {
  draftName = new FormControl('', Validators.required);
  annotation = new FormControl('');
  content = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<ConfigEditorDialogComponent>, @Inject(MAT_DIALOG_DATA) public devices: Device[]) {
  }

  ngOnInit() {
    const lastRunningDeviceConfig = config => config.ip === this.devices[0].ip && config.type.toLocaleLowerCase() === 'running';
    const commands = CONFIG_DATA.filter(lastRunningDeviceConfig)[0].commands;
    this.content.setValue(commands.join('\n'));
  }

  save() {
    // TODO: save by service then close the dialog.
    this.dialogRef.close({draftName: this.draftName.value, annotation: this.annotation.value, content: this.content.value});
  }

}
