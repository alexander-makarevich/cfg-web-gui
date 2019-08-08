import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-label-config-dialog',
  templateUrl: './label-config-dialog.component.html',
  styleUrls: ['./label-config-dialog.component.scss']
})
export class LabelConfigDialogComponent {

  constructor(private matDialogRef: MatDialogRef<LabelConfigDialogComponent>) { }

  save() {
    this.matDialogRef.close('todo: data');
  }

}
