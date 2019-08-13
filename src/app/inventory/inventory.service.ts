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
  {ip: '192.168.3.1', type: 'MES', series: '2124', model: 'DC', osType: 'ROS2' , version: '3.4-b489', availability: 'OK'   , status: 'Conflict'},
  {ip: '192.168.3.2', type: 'MES', series: '3124', model: 'DC', osType: 'ROS3' , version: '3.4-b489', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.3.3', type: 'MES', series: '3108', model: 'DC', osType: 'ROS3' , version: '3.4-b489', availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.3.4', type: 'MES', series: '3108', model: 'DC', osType: 'ROS3' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.3.5', type: 'MES', series: '3108', model: 'AC', osType: 'ROS3' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.3.6', type: 'MES', series: '3124', model: 'AC', osType: 'ROS3' , version: '5.6-b18' , availability: 'ERROR', status: 'Backup'},
  {ip: '192.168.3.7', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.3.8', type: 'MES', series: '3108', model: 'DC', osType: 'ROS2' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
  {ip: '192.168.3.9', type: 'MES', series: '2124', model: 'DC', osType: 'ROS2' , version: '5.6-b18' , availability: 'OK'   , status: 'Backup'},
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
  {ip: '192.168.1.1', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.1.2', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.1.3', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.1.4', type: 'Backup' , capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.1.4', type: 'Backup' , capturedOn: '2019-06-01T09:00:00', version: '2', associatedLabel: null            , commands: commands06},
  {ip: '192.168.1.4', type: 'Running', capturedOn: '2019-07-01T09:00:00', version: '3', associatedLabel: 'Baseline'      , commands: commands07},
  {ip: '192.168.2.4', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Stable_config' , commands: commands05},
  {ip: '192.168.2.5', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.6', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.7', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.2.8', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.9', type: 'Backup' , capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.2.9', type: 'Running', capturedOn: '2019-06-01T09:00:00', version: '2', associatedLabel: 'Baseline'      , commands: commands06},
  {ip: '192.168.3.1', type: 'Backup' , capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.3.1', type: 'Running', capturedOn: '2019-06-01T09:00:00', version: '2', associatedLabel: 'Baseline'      , commands: commands06},
  {ip: '192.168.3.2', type: 'Backup' , capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.3.2', type: 'Running', capturedOn: '2019-06-01T09:00:00', version: '2', associatedLabel: 'Baseline'      , commands: commands06},
  {ip: '192.168.3.3', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.3.4', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.3.5', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Stable_config' , commands: commands05},
  {ip: '192.168.3.6', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.3.7', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: null            , commands: commands05},
  {ip: '192.168.3.8', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
  {ip: '192.168.3.9', type: 'Running', capturedOn: '2019-05-01T09:00:00', version: '1', associatedLabel: 'Baseline'      , commands: commands05},
];

export const authors = ['Ivanov', 'Petrov', 'Sidorov'];

export interface ShortDraft {
  ip: string;
  label: string;
  annotation: string;
  content: string;
}

export interface Draft {
  id: number;
  author: string;
  label: string;
  ip: string;
  updateTime: string;
  annotation: string;
  commands: string[];
}

export const DRAFT_DATA: Draft[] = [
  {id: 1, author: authors[0], label: 'MyNoNameDraft', ip: '192.168.1.1', updateTime: '2019-08-10T09:00:01', annotation: 'Черновик конфигурации устройства 192.168.1.1', commands: commands05},
  {id: 2, author: authors[1], label: '192.168.1.1-base-config', ip: '192.168.1.1', updateTime: '2019-08-11T16:12:23', annotation: 'Черновик базовой рабочей конфигурации устройства 192.168.1.1', commands: commands05},
];

const getCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return date + 'T' + time;
};

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  saveDraft(shortDraft: ShortDraft) {
    const id = DRAFT_DATA.length + 1;
    const author = authors[id % 3];
    const draft: Draft = {
      id,
      author,
      ip: shortDraft.ip,
      updateTime: getCurrentDateTime(),
      label: shortDraft.label,
      annotation: shortDraft.annotation,
      commands: shortDraft.content.split('\n'),
    };

    DRAFT_DATA.push(draft);
  }

  uploadDraft(shortDraft: ShortDraft) {
    const available = CONFIG_DATA.filter(config => config.ip === shortDraft.ip);
    available.forEach(config => config.type = 'Backup');
    const versions = available.map(config => +config.version);
    const version = (Math.max(...versions) + 1).toString();

    const configuration: Configuration = {
      ip: shortDraft.ip,
      type: 'Running',
      capturedOn: getCurrentDateTime(),
      version,
      associatedLabel: null,
      commands: shortDraft.content.split('\n'),
    };

    CONFIG_DATA.push(configuration);
  }
}
