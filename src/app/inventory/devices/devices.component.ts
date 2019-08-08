import { Component, OnInit } from '@angular/core';
import {DEVICE_DATA} from '../inventory.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  displayedColumns: string[] = ['ip', 'type', 'series', 'model', 'osType', 'version', 'availability', 'status'];
  dataSource = DEVICE_DATA;

  constructor() { }

  ngOnInit() {
  }

}
