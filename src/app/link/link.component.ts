import { Component, OnInit, Input } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input() label: string;
  @Input() url: Url;
  constructor() { }

  ngOnInit() {
  }

}
