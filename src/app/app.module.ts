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

const monacoConfig: NgxMonacoEditorConfig = {
  defaultOptions: { scrollBeyondLastLine: false, automaticLayout: true }, // pass default options to be used
  // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
  onMonacoLoad: () => { console.log((window as any).monaco); }
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
