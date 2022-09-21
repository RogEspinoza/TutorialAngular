import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    PadreComponent,
    HijoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
