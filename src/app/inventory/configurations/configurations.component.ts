import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog, MatTableDataSource} from '@angular/material';

import {CONFIG_DATA, Configuration} from '../inventory.service';
import {LabelConfigDialogComponent} from '../label-config-dialog/label-config-dialog.component';
import {EditAsDraftDialogComponent, DialogAction} from '../edit-as-draft-dialog/edit-as-draft-dialog.component';


@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'ip', 'type', 'capturedOn', 'version', 'associatedLabel'];
  dataSource = new MatTableDataSource<Configuration>(CONFIG_DATA);
  selection = new SelectionModel<Configuration>(true, []);

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
  checkboxLabel(row?: Configuration): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ip}`;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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

  openEditAsDraftDialog(): void {
    console.log(this.selection.selected);
    this.dialog.open(EditAsDraftDialogComponent, {
      width: '90%',
      data: this.selection.selected,
    }).afterClosed().subscribe(action => {
      if (action === DialogAction.SaveAndUpload) {
        this.dataSource.data = CONFIG_DATA;
      }
    });
  }

}
