import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { AboutComponent } from './about/about.component';
import { MaterializeModule } from 'angular2-materialize';
import { AddEventComponent } from './add-event/add-event.component';
import { EventFaceComponent } from './event-face/event-face.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component'
import { EventServiceService } from './event-service.service'
import { LocalStorageModule } from 'angular-2-local-storage';
@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    AboutComponent,
    AddEventComponent,
    EventFaceComponent,
    DateTimePickerComponent,
  ],
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
  ],
  providers: [
    EventServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
