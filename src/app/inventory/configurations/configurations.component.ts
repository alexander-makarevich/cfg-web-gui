import { Component, OnInit } from '@angular/core';
import {CONFIG_DATA} from '../inventory.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  displayedColumns: string[] = ['ip', 'type', 'capturedOn', 'version', 'associatedLabel'];
  dataSource = CONFIG_DATA;

  constructor() { }

  ngOnInit() {
  }

}
