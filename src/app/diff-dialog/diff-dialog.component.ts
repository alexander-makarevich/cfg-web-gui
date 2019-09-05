import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import {Configuration, InventoryService} from '../inventory/inventory.service';
import {DiffEditorModel} from 'ngx-monaco-editor';

export interface DialogData {
  configuration: Configuration,
}

@Component({
  selector: 'app-diff-dialog',
  templateUrl: './diff-dialog.component.html',
  styleUrls: ['./diff-dialog.component.scss']
})
export class DiffDialogComponent implements OnInit {
  options = {
    theme: 'vs'
  };
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

  constructor(public dialogRef: MatDialogRef<DiffDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private service: InventoryService) {
  }

  ngOnInit() {
    const configuration = this.data.configuration;
    const versionBefore = ((+configuration.version) - 1).toString();

    this.service
      .getConfiguration(configuration.ip, versionBefore)
      .subscribe(configuration => console.log('DiffDialogComponent: ', configuration, this.data.configuration));
  }

}
