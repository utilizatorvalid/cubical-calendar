import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  author:String = "Groza Vasile"
  constructor() { }

  ngOnInit() {
    $('.collapsible').collapsible();
  }

}
