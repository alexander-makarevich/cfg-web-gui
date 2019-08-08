import { Injectable } from '@angular/core';

export interface Device {
  ip: string;
  type: string;
  series: string;
  model: string;
  osType: string;
  version: string;
  availability: string;
  status: string;
}

export const DEVICE_DATA: Device[] = [
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

export interface Configuration {
  ip: string;
  type: string;
  capturedOn: string;
  version: string;
  associatedLabel: string;
  commands: string[];
}

export const commands05: string[] = ['version 15.1', 'service timestamps debug datetime msec', 'hostname CiscoRouter2081', 'boot-start-maker', 'boot-end-maker'];
export const commands06: string[] = ['version 15.1', 'service timestamps debug datetime msec', 'hostname CiscoRouter2081', 'boot-start-maker', 'boot-end-maker', 'enable sercer 5 jia8fmm23n32', 'enable password 7 asdfj'];
export const commands07: string[] = ['version 15.1', 'service timestamps debug datetime msec', 'hostname CiscoRouter2081', 'boot-start-maker', 'boot-end-maker', 'enable sercer 5 jia8fmm23n32', 'enable password 7 asdfj', 'aaa new-model', 'aaa authentication login default local enable'];

export const CONFIG_DATA: Configuration[] = [
  {ip: '192.168.1.1', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.1.2', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.1.3', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.1.4', type: 'Backup' , capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.1.4', type: 'Backup' , capturedOn: '2019-06-01', version: '2', associatedLabel: null            , commands: commands06},
  {ip: '192.168.1.4', type: 'Running', capturedOn: '2019-07-01', version: '3', associatedLabel: 'Baseline'      , commands: commands07},
  {ip: '192.168.2.4', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Stable_config' , commands: commands05},
  {ip: '192.168.2.5', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.6', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.7', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.8', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.9', type: 'Backup' , capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.9', type: 'Running', capturedOn: '2019-06-01', version: '2', associatedLabel: 'Baseline'      , commands: commands06},
  {ip: '192.168.2.1', type: 'Backup' , capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.1', type: 'Running', capturedOn: '2019-06-01', version: '2', associatedLabel: 'Baseline'      , commands: commands06},
  {ip: '192.168.2.2', type: 'Backup' , capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.2', type: 'Running', capturedOn: '2019-06-01', version: '2', associatedLabel: 'Baseline'      , commands: commands06},
  {ip: '192.168.2.3', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.4', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.3.5', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Stable_config' , commands: commands05},
  {ip: '192.168.2.6', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.7', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.8', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.9', type: 'Running', capturedOn: '2019-05-01', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
];

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }
}
