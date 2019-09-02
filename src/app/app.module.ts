import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {InventoryComponent} from './inventory/inventory.component';
import {DevicesComponent} from './inventory/devices/devices.component';
import {ConfigurationsComponent} from './inventory/configurations/configurations.component';
import {LabelConfigDialogComponent} from './inventory/label-config-dialog/label-config-dialog.component';
import {EditAsDraftDialogComponent} from './inventory/edit-as-draft-dialog/edit-as-draft-dialog.component';
import {DraftsComponent} from './inventory/drafts/drafts.component';
import {MonacoEditorModule, NgxMonacoEditorConfig} from 'ngx-monaco-editor';
import {of} from "rxjs";

function State() {
  this.clone = () => new State();
  this.equals = (other) => other === this;
}

class MyState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new MyState();
  }

  equals(other: monaco.languages.IState): boolean {
    return false;
  }
}
const monacoConfig: NgxMonacoEditorConfig = {
  defaultOptions: { scrollBeyondLastLine: false, automaticLayout: true }, // pass default options to be used
  // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
  onMonacoLoad: () => {
    debugger;
    monaco.languages.register({
      id: "colorLanguage"
    });

    monaco.languages.setTokensProvider('colorLanguage', {
      getInitialState: () => new MyState(),
      tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
        console.log('tokenize: ', line);
        if (line === "red") {
          return {
            tokens: [{
              startIndex: 0,
              scopes: 'comment'
            }],
            endState: new MyState()
          };
        } else {
          return {
            tokens: [],
            endState: new MyState()
          }
        }
      }
    });

    monaco.languages.registerColorProvider("colorLanguage", {
      provideColorPresentations: () => {
        return [
          {
            label: "color picker title text"
          }
        ];
      },

      provideDocumentColors: () => {
        return of([
            {
              color: { red: 255, blue: 0, green: 0, alpha: 1},
              range:{
                startLineNumber: 1,
                startColumn: 0,
                endLineNumber: 1,
                endColumn: 0
              }
            },
            {
              color: { red: 0, blue: 255, green: 0, alpha: 1},
              range:{
                startLineNumber: 2,
                startColumn: 0,
                endLineNumber: 2,
                endColumn: 0
              }
            },
            {
              color: { red: 0, blue: 0, green: 255, alpha: 1},
              range:{
                startLineNumber: 3,
                startColumn: 0,
                endLineNumber: 3,
                endColumn: 0
              }
            }
        ]).toPromise();
      }

    });

    console.log((window as any).monaco);
  }
};

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    DevicesComponent,
    ConfigurationsComponent,
    LabelConfigDialogComponent,
    EditAsDraftDialogComponent,
    DraftsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig) // use forRoot() in main app module only.
  ],
  entryComponents: [
    EditAsDraftDialogComponent,
    LabelConfigDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
