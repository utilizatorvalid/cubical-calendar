import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

declare var swal: any;
declare var $:any;
declare var Materialize:any;
@Component({
  selector: 'event-face',
  templateUrl: './event-face.component.html',
  styleUrls: ['./event-face.component.scss']
})
export class EventFaceComponent implements OnInit {
  @Input() event;
  @Output() delete: EventEmitter<any>= new EventEmitter;
  @Output() edit: EventEmitter<any> = new EventEmitter;
  constructor() {
  }

  ngOnInit() {
    // console.log("this is event to Display", this.event);
  }
  ngAfterViewInit() {

  }
  getTime(){
    let d = new Date(this.event.timestamp) 
    return `${d.toDateString()}   ${d.toTimeString()}`; 
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
    this.edit.emit(this.event)
    $('#modal2').modal("open");
    Materialize.updateTextFields()


  }

}
