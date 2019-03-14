import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'example-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() inputMsg: string;

  linkUrl: string = "some-url";
  linkLabel: string = "some label";

  constructor() { }

  ngOnInit() {
    console.log("input message: " + this.inputMsg);
  }

}
