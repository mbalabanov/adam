import { Component, OnInit } from '@angular/core';
import { newsitems } from '../newsdata';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  newsitems = newsitems;

  constructor() { }

  ngOnInit(): void {
  }

}
