import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
      $('.modal').modal();
    }
  openEventModal(){
    console.log("Have to open event form");
  }
}
