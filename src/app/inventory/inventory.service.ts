import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

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

export const DEVICE_DATA: Device[] = [{
  ip: '192.168.1.1',
  type: 'MES',
  series: '3124',
  model: 'AC',
  osType: 'ROS2',
  version: '2.2-b404',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.1.2',
  type: 'MES',
  series: '3124',
  model: 'DC',
  osType: 'ROS4',
  version: '2.2-b404',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.1.3',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '2.2-b404',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.1.4',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '2.2-b404',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.2.4',
  type: 'ESR',
  series: '1200',
  model: '-',
  osType: 'Linux',
  version: '6.2.2',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.2.5',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '3.4-b489',
  availability: 'OK',
  status: 'Unknown'
}, {
  ip: '192.168.2.6',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '3.4-b489',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.2.7',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '3.4-b489',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.2.8',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '3.4-b489',
  availability: 'ERROR',
  status: 'Backup'
}, {
  ip: '192.168.2.9',
  type: 'MES',
  series: '2124',
  model: 'DC',
  osType: 'ROS2',
  version: '3.4-b489',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.3.1',
  type: 'MES',
  series: '2124',
  model: 'DC',
  osType: 'ROS2',
  version: '3.4-b489',
  availability: 'OK',
  status: 'Conflict'
}, {
  ip: '192.168.3.2',
  type: 'MES',
  series: '3124',
  model: 'DC',
  osType: 'ROS3',
  version: '3.4-b489',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.3.3',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS3',
  version: '3.4-b489',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.3.4',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS3',
  version: '5.6-b18',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.3.5',
  type: 'MES',
  series: '3108',
  model: 'AC',
  osType: 'ROS3',
  version: '5.6-b18',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.3.6',
  type: 'MES',
  series: '3124',
  model: 'AC',
  osType: 'ROS3',
  version: '5.6-b18',
  availability: 'ERROR',
  status: 'Backup'
}, {
  ip: '192.168.3.7',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '5.6-b18',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.3.8',
  type: 'MES',
  series: '3108',
  model: 'DC',
  osType: 'ROS2',
  version: '5.6-b18',
  availability: 'OK',
  status: 'Backup'
}, {
  ip: '192.168.3.9',
  type: 'MES',
  series: '2124',
  model: 'DC',
  osType: 'ROS2',
  version: '5.6-b18',
  availability: 'OK',
  status: 'Backup'
}];

export interface Configuration {
  ip: string;
  type: string;
  capturedOn: string;
  version: string;
  labels: string[];
  commands: string[];
}

export const commands05: string[] = [
  'version 15.1',
  'service timestamps debug datetime msec',
  'hostname CiscoRouter2081',
  'boot-start-maker',
  'boot-end-maker'
];
export const commands06: string[] = commands05.concat(['enable sercer 5 jia8fmm23n32', 'enable password 7 asdfj']);
export const commands07: string[] = commands06.concat(['aaa new-model', 'aaa authentication login default local enable']);

export const commands01: string[] = [
  '#!/usr/bin/clish',
  '#12',
  'hostname ESR-MAINA',
  '',
  'system fan-speed auto',
  '',
  'object-group network server_COA',
  '  ip address-range 192.168.26.653',
  'exit',
  '',
  'security zone-pair trusted untrusted',
  '  rule 1',
  '    action permit',
  '    match protocol any',
  '    match source-address any',
  '  exit',
  'exit',
];

export const CONFIG_DATA: Configuration[] = [{
  ip: '192.168.1.1',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.1.2',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.1.3',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}, {
  ip: '192.168.1.4',
  type: 'Backup',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.1.4',
  type: 'Backup',
  capturedOn: '2019-06-01T09:00:00',
  version: '2',
  labels: [],
  commands: commands06
}, {
  ip: '192.168.1.4',
  type: 'Running',
  capturedOn: '2019-07-01T09:00:00',
  version: '3',
  labels: ['Baseline'],
  commands: commands07
}, {
  ip: '192.168.2.4',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Stable_config'],
  commands: commands05
}, {
  ip: '192.168.2.5',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}, {
  ip: '192.168.2.6',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}, {
  ip: '192.168.2.7',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}, {
  ip: '192.168.2.8',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.2.9',
  type: 'Backup',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.2.9',
  type: 'Running',
  capturedOn: '2019-06-01T09:00:00',
  version: '2',
  labels: ['Baseline'],
  commands: commands06
}, {
  ip: '192.168.3.1',
  type: 'Backup',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.3.1',
  type: 'Running',
  capturedOn: '2019-06-01T09:00:00',
  version: '2',
  labels: ['Baseline'],
  commands: commands06
}, {
  ip: '192.168.3.2',
  type: 'Backup',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.3.2',
  type: 'Running',
  capturedOn: '2019-06-01T09:00:00',
  version: '2',
  labels: ['Baseline'],
  commands: commands06
}, {
  ip: '192.168.3.3',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.3.4',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}, {
  ip: '192.168.3.5',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Stable_config'],
  commands: commands05
}, {
  ip: '192.168.3.6',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}, {
  ip: '192.168.3.7',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: [],
  commands: commands05
}, {
  ip: '192.168.3.8',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}, {
  ip: '192.168.3.9',
  type: 'Running',
  capturedOn: '2019-05-01T09:00:00',
  version: '1',
  labels: ['Baseline'],
  commands: commands05
}];

export const authors = ['Ivanov', 'Petrov', 'Sidorov'];

export interface ShortDraft {
  draftId: number | null;
  ip: string;
  labels: string[];
  annotation: string;
  content: string;
}

export interface Draft {
  id: number;
  author: string;
  labels: string[];
  ip: string;
  updateTime: string;
  annotation: string;
  commands: string[];
}

export const DRAFT_DATA: Draft[] = [{
  id: 1,
  author: authors[0],
  labels: ['MyNoNameDraft'],
  ip: '192.168.1.1',
  updateTime: '2019-08-10T09:00:01',
  annotation: 'Черновик конфигурации устройства 192.168.1.1',
  commands: commands05
}, {
  id: 2,
  author: authors[1],
  labels: ['192.168.1.1-base-config'],
  ip: '192.168.1.1',
  updateTime: '2019-08-11T16:12:23',
  annotation: 'Черновик базовой рабочей конфигурации устройства 192.168.1.1',
  commands: commands01
}, {
  id: 3,
  author: authors[2],
  labels: ['stable'],
  ip: '192.168.1.4',
  updateTime: '2019-08-11T16:12:23',
  annotation: 'Стабильная версия конфигурации устройства 192.168.1.4',
  commands: commands05
}];

const getCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return date + 'T' + time;
};

export interface LabelIpPair {
  label: string;
  ip: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  drafts: Draft[] = DRAFT_DATA;
  configurations: Configuration[] = CONFIG_DATA;

  constructor() { }

  getDrafts(): Observable<Draft[]> {
    return of(this.drafts);
  }

  removeDrafts(removedDrafts: Draft[]): Observable<Draft[]> {
    this.drafts = this.drafts
      .filter(draft => !removedDrafts.some(removed => removed.id === draft.id));

    return of(this.drafts);
  }

  createDraft(shortDraft: ShortDraft): Observable<any> {
    const id = DRAFT_DATA.length + 1;
    const author = authors[id % 3];
    const draft: Draft = {
      id,
      author,
      ip: shortDraft.ip,
      updateTime: getCurrentDateTime(),
      labels: shortDraft.labels,
      annotation: shortDraft.annotation,
      commands: shortDraft.content.split('\n'),
    };

    this.drafts.push(draft);

    return of(null);
  }

  saveDraft(shortDraft: ShortDraft): Observable<any> {
    const author = authors[shortDraft.draftId % 3];
    const changedDraft: Draft = {
      id: shortDraft.draftId,
      author,
      ip: shortDraft.ip,
      updateTime: getCurrentDateTime(),
      labels: shortDraft.labels,
      annotation: shortDraft.annotation,
      commands: shortDraft.content.split('\n'),
    };

    const id: number = this.drafts.findIndex(draft => draft.id === shortDraft.draftId);
    this.drafts[id] = changedDraft;

    return of(null);
  }

  /**
   * Is there the label into the configurations or drafts for the ip?
   */
  isLabelIpPairDuplicated(ip: string, label: string, pairs: LabelIpPair[] = []): Observable<boolean> {
    const isThereInConfigurations: boolean = this.configurations
      .some(config => config.ip === ip && config.labels.some(availableLabel => availableLabel === label));
    const isThereInDrafts: boolean = this.drafts
      .some(draft => draft.ip === ip && draft.labels.some(availableLabel => availableLabel === label));
    const isThereInPairs: boolean = pairs.some(pair => pair.ip === ip && pair.label === label);
    return of(isThereInConfigurations || isThereInDrafts || isThereInPairs);
  }

  uploadDraft(shortDraft: ShortDraft): Observable<any> {
    const available = CONFIG_DATA.filter(config => config.ip === shortDraft.ip);
    available.forEach(config => config.type = 'Backup');
    const versions = available.map(config => +config.version);
    const version = (Math.max(...versions) + 1).toString();

    const configuration: Configuration = {
      ip: shortDraft.ip,
      type: 'Running',
      capturedOn: getCurrentDateTime(),
      version,
      labels: shortDraft.labels,
      commands: shortDraft.content.split('\n'),
    };

    CONFIG_DATA.push(configuration);

    const id: number = this.drafts.findIndex(draft => draft.id === shortDraft.draftId);
    DRAFT_DATA.splice(id, 1);

    return of(null);
  }

  getConfiguration(ip: string, version: string) {
    const filtered = this.configurations
      .filter(configuration => configuration.ip === ip && configuration.version === version);
    const configuration: Configuration | null = filtered ? {...filtered[0]} : null;
    return of(configuration);
  }
}
