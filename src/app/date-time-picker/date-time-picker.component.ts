import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements OnInit {
  @Input() timestamp: any;
  @Input() purpose: any;
  datepicker: any = null;
  timepicker: any = null;
  constructor() { }
  ngOnChanges(changes: any) {
    let date = new Date(this.timestamp);
    // console.log("changes in time ", this.timestamp)
    if(!this.timestamp)
        return;
    if(this.datepicker){
      this.datepicker.set("select", date);
      this.timepicker.val(`${date.toTimeString().split(" ")[0]}`);
    }
  }
  ngAfterViewInit() {
    let input = $(`#input_date${this.purpose}`).pickadate()
    // console.log("set date",input,this.timestamp);
    this.datepicker = input.pickadate('picker')
    input = $(`#input_time${this.purpose}`).pickatime()
    // console.log("time:", input);
    this.timepicker = input.pickatime('picker');
    
  }
  ngOnInit() {
    // console.log("date and time", this.timestamp);
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,

    });

    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function () { } //Function for after opening timepicker
    });
  }

}
