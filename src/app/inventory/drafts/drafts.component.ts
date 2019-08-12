import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Draft, DRAFT_DATA} from '../inventory.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.scss']
})
export class DraftsComponent implements OnInit {
  displayedColumns: string[] = ['label', 'author'];
  dataSource = new MatTableDataSource<Draft>(DRAFT_DATA);

  constructor() { }

  ngOnInit() {
  }

}
