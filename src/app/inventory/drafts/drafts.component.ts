import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Draft, DRAFT_DATA} from '../inventory.service';
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'ip', 'labels', 'author', 'updateTime'];
  dataSource = new MatTableDataSource<Draft>(DRAFT_DATA);
  selection = new SelectionModel<Draft>(true, []);

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
  checkboxLabel(row?: Draft): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ip}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
