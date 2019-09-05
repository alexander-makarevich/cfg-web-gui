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
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {monacoConfig} from "./inventory/edit-as-draft-dialog/monaco-editor-config";
import {DiffDialogComponent} from './diff-dialog/diff-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    DevicesComponent,
    ConfigurationsComponent,
    LabelConfigDialogComponent,
    EditAsDraftDialogComponent,
    DraftsComponent,
    DiffDialogComponent,
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
    DiffDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
