import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  ip: string;
  type: string;
  series: string;
  model: string;
  osType: string;
  version: string;
  availability: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ip: '192.168.1.1', type: 'MES', series: '3124', model: 'AC', osType: 'ROS2' , version: '2.2-b404', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.1.2', type: 'MES', series: '3124', model: 'DC', osType: 'ROS4' , version: '2.2-b404', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.1.3', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '2.2-b404', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.1.4', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '2.2-b404', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.4', type: 'ESR', series: '1200', model: '-' , osType: 'Linux', version: '6.2.2'   , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.5', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '3.4-b489', availability: 'OK'   , status: 'Unknown'},
  {ip: '192.168.2.6', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '3.4-b489', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.7', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '3.4-b489', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.8', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '3.4-b489', availability: 'ERROR', status: 'Backup'},
  {ip: '192.168.2.9', type: 'MES', series: '2124', model: 'DC', osType: 'ROS2' , version: '3.4-b489', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.1', type: 'MES', series: '2124', model: 'DC', osType: 'ROS2' , version: '3.4-b489', availability: 'OK'   , status: 'Conflict'},
  {ip: '192.168.2.2', type: 'MES', series: '3124', model: 'DC', osType: 'ROS3' , version: '3.4-b489', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.3', type: 'MES', series: '3108', model: 'DC', osType: 'ROS3' , version: '3.4-b489', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.4', type: 'MES', series: '3108', model: 'DC', osType: 'ROS3' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.3.5', type: 'MES', series: '3108', model: 'AC', osType: 'ROS3' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.6', type: 'MES', series: '3124', model: 'AC', osType: 'ROS3' , version: '5.6-b18' , availability: 'ERROR', status: 'Backup'},
  {ip: '192.168.2.7', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.8', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.2.9', type: 'MES', series: '2124', model: 'DC', osType: 'ROS2' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
];

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  displayedColumns: string[] = ['ip', 'type', 'series', 'model', 'osType', 'version', 'availability', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
