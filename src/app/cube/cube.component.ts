import { Component, OnInit, HostListener } from '@angular/core';
import { EventServiceService } from '../event-service.service'
@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {
  KEY_CODE = {
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    UP_ARROW: 38,
    DOWN_ARROW: 40
  }

  states: Array<String> = ['radio-front', 'radio-back', 'radio-left', 'radio-right', 'radio-top', 'radio-bottom'];
  moves = {
    'radio-front': ['radio-left', 'radio-right', 'radio-top', 'radio-bottom'],
    'radio-back': ['radio-right', 'radio-left', 'radio-top', 'radio-bottom'],
    'radio-left': ['radio-back', 'radio-front', 'radio-top', 'radio-bottom'],
    'radio-right': ['radio-front', 'radio-back', 'radio-top', 'radio-bottom'],
    'radio-top': ['radio-left', 'radio-right', 'radio-back', 'radio-front'],
    'radio-bottom': ['radio-left', 'radio-right', 'radio-front', 'radio-back']
  }
  selectedState = 'radio-front';
  next_events: any;
  constructor(public event_data_service: EventServiceService) {
  }

  ngOnInit() {
    this.loadEvents()
  }
  loadEvents() {
    this.event_data_service.getData().then(events => {
      console.log("events from localstorage", events);

        this.next_events = events
    })
  }
  updateCubePosition() {
    console.log(this.selectedState);
    let input = document.getElementById(this.selectedState)
    input["checked"] = true;
  }
  ngAfterViewInit() {
    this.updateCubePosition();
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    let key;
    if (event.keyCode === this.KEY_CODE.LEFT_ARROW) {
      key = 0;
    }
    if (event.keyCode === this.KEY_CODE.RIGHT_ARROW) {
      key = 1;
    }
    if (event.keyCode === this.KEY_CODE.UP_ARROW) {
      key = 2;
    }

    if (event.keyCode === this.KEY_CODE.DOWN_ARROW) {
      key = 3;
    }
    if ([0, 1, 2, 3].indexOf(key) != -1) {
      this.selectedState = this.moves[this.selectedState][key];
      this.updateCubePosition();
    }
  }
}
