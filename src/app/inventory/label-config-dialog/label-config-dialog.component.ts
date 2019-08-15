import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import {CONFIG_DATA, Configuration} from '../inventory.service';

@Component({
  selector: 'app-label-config-dialog',
  templateUrl: './label-config-dialog.component.html',
  styleUrls: ['./label-config-dialog.component.scss']
})
export class LabelConfigDialogComponent implements OnInit {
  ip: string;
  labels: string[] = ['steak-0', 'pizza-1', 'tacos-2'];

  displayedColumns: string[] = ['ip', 'type', 'version', 'label'];
  dataSource = new MatTableDataSource(CONFIG_DATA);

  constructor(@Inject(MAT_DIALOG_DATA) public configurations: Configuration[],
              private matDialogRef: MatDialogRef<LabelConfigDialogComponent>) {
  }

  upload() {
    console.log(this.configurations);
    this.matDialogRef.close('todo: data');
  }

  ngOnInit() {
    this.ip = this.configurations[0].ip;
    this.labels = CONFIG_DATA
      .filter(config => config.ip === this.configurations[0].ip)
      .map(config => config.labels)
      .reduce((acc, val) => acc.concat(val), []);
    this.dataSource.filter = this.ip;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
