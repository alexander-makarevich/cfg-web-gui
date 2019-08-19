import {Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

import {MatDialog, MatTableDataSource} from '@angular/material';
import {Draft, InventoryService} from '../inventory.service';
import {
  DialogAction,
  DialogData,
  DialogType,
  EditAsDraftDialogComponent,
  transformDraftToShortDraft
} from "../edit-as-draft-dialog/edit-as-draft-dialog.component";


@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'id', 'ip', 'labels', 'author', 'updateTime'];
  dataSource = new MatTableDataSource<Draft>([]);
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

  constructor(private service: InventoryService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getDrafts().subscribe(drafts => this.dataSource.data = drafts);
  }

  openEditDraftDialog() {
    console.log(this.selection.selected);
    const data: DialogData = {
      type: DialogType.EditDraft,
      shortDraft: transformDraftToShortDraft(this.selection.selected[0]),
    };

    this.dialog.open(EditAsDraftDialogComponent, {
      width: '90%',
      data,
    }).afterClosed().subscribe(action => {
      if (action === DialogAction.Save || action === DialogAction.SaveAndUpload) {
        this.service.getDrafts().subscribe(drafts => {
          this.selection.clear();
          this.dataSource.data = drafts;
        });
      }
    });
  }

  removeDrafts() {
    this.service.removeDrafts(this.selection.selected)
      .subscribe(drafts => {
        this.selection.clear();
        this.dataSource.data = drafts;
      });
  }

}
