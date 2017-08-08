import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

declare var swal: any;
declare var $:any;
@Component({
  selector: 'event-face',
  templateUrl: './event-face.component.html',
  styleUrls: ['./event-face.component.scss']
})
export class EventFaceComponent implements OnInit {
  @Input() event;
  @Output() delete: EventEmitter<any>= new EventEmitter;
  constructor() {
  }

  ngOnInit() {
    console.log("this is event to Display", this.event);
  }
  ngAfterViewInit() {

  }
  deleteEvent() {

    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( () => {
      swal(
        'Deleted!',
        'Your event has been deleted.',
        'success'
      )
      this.delete.emit(this.event)
    })
  }
  editEvent() {
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
  }

}
