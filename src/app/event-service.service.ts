import { Injectable, } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage'
import { Observable } from 'rxjs'
@Injectable()
export class EventServiceService {
  http: any;
  events;
  constructor(private localStorageService: LocalStorageService) {
  }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      let data: any = this.localStorageService.get("events");
      if (data === null)
        data = [];
      data.sort((e1, e2) => {
        if (e1["timestamp"] > e2["timestamp"])
          return 1;
        if (e1["timestamp"] < e2["timestamp"])
          return -1;
        return 0;
      })
      resolve(data);
    })
  }
  addEvent(event) {

    let data: any = this.localStorageService.get('events')
    if (data === null) {
      data = [];
    }
    data.push(event);
    this.localStorageService.set('events', data);
  }
  updateEvent(oldEvent, newEvent) {
    let data: any = this.localStorageService.get('events')
    let index = -1
    for (var i = 0; i < data.length; i++) {
      if (JSON.stringify(data[i]) === JSON.stringify(event)) {
        index = i;
      }
    }
    if (index == -1) {
      index = 0;
      data.splice(index, 0, newEvent)
    }
    data[index] = newEvent;
    data.push(event);
    this.localStorageService.set('events', data);
  }
  deleteEvent(event) {
    let data: any = this.localStorageService.get('events')
    console.log("data =", data);
    // console.log(event);
    let index = -1
    for (var i = 0; i < data.length; i++) {
      if (JSON.stringify(data[i]) === JSON.stringify(event)) {
        index = i;
      }
    }
    console.log(index);
    if (index > -1) {
      data.splice(index, 1)
    }
    this.localStorageService.set('events',data);
    // if (index == -1) {
    //   index = 0;
    // }
  }
}
