import { Component } from '@angular/core';
import { EventServiceService } from './event-service.service'
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Cubical Calendar!';
  updateCube = 0;
  constructor(public event_data_service: EventServiceService) {
    // this.event_data_service.getData().subscribe((data) => {
    //   console.log("what is in the data ", data);
    // });
  }
  ngAfterViewInit(){
    // this.updateCube = false;
  }
  addNewEvent(event: Event) {
    let date, time, title, description, image,timestamp;
    date = $('#input_date').val();
    time = $('#input_time').val();
    title = $('#title').val();
    description = $('#description').val();
    console.log(date.toString()+" " + time.toString())
    let t = new Date(date.toString()+ " " + time.toString())
    timestamp = t.getTime();
    this.event_data_service.addEvent({
      title:title,
      description:description,
      timestamp:timestamp
    })
    this.updateCube +=1;
  }
}
