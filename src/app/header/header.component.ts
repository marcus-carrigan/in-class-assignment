import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'example-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() inputMsg: string;
  @Input() isLink: boolean;

  linkUrl: string = "some-url";
  text: string = "some label";

  constructor() { }

  ngOnInit() {
    console.log("input message: " + this.inputMsg);
  }

}
