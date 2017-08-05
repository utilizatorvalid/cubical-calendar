import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-face',
  templateUrl: './event-face.component.html',
  styleUrls: ['./event-face.component.scss']
})
export class EventFaceComponent implements OnInit {
  @Input() event;
  constructor() { 
  }

  ngOnInit() {
    console.log("this is event to Display",this.event);
  }
  ngAfterViewInit(){

  }

}
