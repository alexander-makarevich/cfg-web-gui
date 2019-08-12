import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-config-editor-dialog',
  templateUrl: './config-editor-dialog.component.html',
  styleUrls: ['./config-editor-dialog.component.scss']
})
export class ConfigEditorDialogComponent implements OnInit {
  draftName = new FormControl('', Validators.required);
  annotation = new FormControl('');
  content = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
