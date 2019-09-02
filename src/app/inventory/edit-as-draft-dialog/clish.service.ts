import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClishService {

  constructor() { }

  getMarkers(configuration: string): Observable<monaco.editor.IMarkerData[]> {
    const errorMarkers: monaco.editor.IMarkerData[] = [{
      endColumn: 34,
      endLineNumber: 8,
      message: 'Invalid IP address',
      severity: monaco.MarkerSeverity.Error,
      startColumn: 20,
      startLineNumber: 8,
    }];
    return of(configuration.includes('192.168.26.653') ? errorMarkers: []);
  }
}
