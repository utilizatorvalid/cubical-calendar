import { Component } from '@angular/core';
import { EventServiceService } from './event-service.service'
declare var $: any;
declare var Materialize: any;
declare var swal: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Cubical Calendar!';
  updateCube = 0;
  event_to_modify = null;
  constructor(public event_data_service: EventServiceService) {
    // this.event_data_service.getData().subscribe((data) => {
    //   console.log("what is in the data ", data);
    // });
  }
  ngAfterViewInit() {
    // this.updateCube = false;
    $('#modal2').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        Materialize.updateTextFields()
      },
      complete: () => {
      } // Callback for Modal close
    }
    );
  }
  saveEditedEvent() {
    let date, time, title, description, image, timestamp;
    date = $('#input_dateedit').val();
    time = $('#input_timeedit').val();
    title = $('#edit_title').val().trim();
    description = $('#edit_description').val().trim();
    let t = new Date(date.toString() + " " + time.toString())
    timestamp = t.getTime();
    let new_event = {
      title: title,
      description: description,
      timestamp: timestamp
    }
    console.log(this.event_to_modify, new_event);
    if (JSON.stringify(this.event_to_modify) === JSON.stringify(new_event)) {
      console.log("the same event")
    }else{
      this.event_data_service.updateEvent(this.event_to_modify,new_event);
      this.updateCube += 1;
    }
  }
  addNewEvent(event: Event) {
    let date, time, title, description, image, timestamp;
    date = $('#input_datecreate').val();
    time = $('#input_timecreate').val();
    title = $('#title').val();
    description = $('#description').val();
    // console.log(date.toString()+" " + time.toString())
    let t = new Date(date.toString() + " " + time.toString())
    timestamp = t.getTime();
    this.event_data_service.addEvent({
      title: title,
      description: description,
      timestamp: timestamp
    })
    this.updateCube += 1;
  }

  modifyEvent(event: Event) {
    // console.log("modified",event);
    this.event_to_modify = event
  }
}
