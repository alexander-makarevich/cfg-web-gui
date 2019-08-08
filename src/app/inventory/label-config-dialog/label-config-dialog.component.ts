import {Component, OnInit, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Device, CONFIG_DATA} from '../inventory.service';

@Component({
  selector: 'app-label-config-dialog',
  templateUrl: './label-config-dialog.component.html',
  styleUrls: ['./label-config-dialog.component.scss']
})
export class LabelConfigDialogComponent implements OnInit {
  ip: string;
  labels: string[] = ['steak-0', 'pizza-1', 'tacos-2'];

  displayedColumns: string[] = ['ip', 'type', 'version', 'associatedLabel'];
  dataSource = new MatTableDataSource(CONFIG_DATA);

  constructor(@Inject(MAT_DIALOG_DATA) public devices: Device[], private matDialogRef: MatDialogRef<LabelConfigDialogComponent>) { }

  upload() {
    console.log(this.devices);
    this.matDialogRef.close('todo: data');
  }

  ngOnInit() {
    this.ip = this.devices[0].ip;
    this.labels = CONFIG_DATA.filter(config => config.ip === this.devices[0].ip).map(config => config.associatedLabel);
    this.dataSource.filter = this.ip;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
