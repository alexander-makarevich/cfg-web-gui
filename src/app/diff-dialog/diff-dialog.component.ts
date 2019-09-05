import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogData {
}

@Component({
  selector: 'app-diff-dialog',
  templateUrl: './diff-dialog.component.html',
  styleUrls: ['./diff-dialog.component.scss']
})
export class DiffDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DiffDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

}
