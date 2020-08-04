import { Component, OnInit } from '@angular/core';
import { newsitems } from '../newsdata';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsitems = newsitems;

  constructor() { }

  ngOnInit(): void {
  }

}
