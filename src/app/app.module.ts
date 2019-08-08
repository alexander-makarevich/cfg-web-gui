import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InventoryComponent } from './inventory/inventory.component';
import { DevicesComponent } from './inventory/devices/devices.component';
import { ConfigurationsComponent } from './inventory/configurations/configurations.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    DevicesComponent,
    ConfigurationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
