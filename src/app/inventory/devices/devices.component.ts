import {Component, OnInit} from '@angular/core';
import {Device, DEVICE_DATA} from '../inventory.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material';
import {LabelConfigDialogComponent} from '../label-config-dialog/label-config-dialog.component';
import {EditAsDraftDialogComponent} from '../edit-as-draft-dialog/edit-as-draft-dialog.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  displayedColumns: string[] = ['select', 'ip', 'type', 'series', 'model', 'osType', 'version', 'availability', 'status'];
  dataSource = new MatTableDataSource<Device>(DEVICE_DATA);
  selection = new SelectionModel<Device>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Device): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ip}`;
  }

  openLabelConfigDialog(): void {
    console.log(this.selection.selected);
    this.dialog.open(LabelConfigDialogComponent, {
      height: '500px',
      width: '900px',
      data: this.selection.selected,
    }).afterClosed().subscribe(todo => {
      console.log(`todo: ${todo}`);
    });
  }

  openConfigEditorDialog(): void {
    console.log(this.selection.selected);
    this.dialog.open(EditAsDraftDialogComponent, {
      width: '90%',
      data: this.selection.selected,
    }).afterClosed().subscribe(todo => {
      console.log('todo:', todo);
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
