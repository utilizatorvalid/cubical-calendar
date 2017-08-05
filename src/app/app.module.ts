import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { AboutComponent } from './about/about.component';
import { MaterializeModule } from 'angular2-materialize';
import { AddEventComponent } from './add-event/add-event.component';
import { EventFaceComponent } from './event-face/event-face.component'
@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    AboutComponent,
    AddEventComponent,
    EventFaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
