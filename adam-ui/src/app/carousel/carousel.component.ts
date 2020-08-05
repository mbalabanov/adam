import { Component, OnInit } from '@angular/core';
import { featured } from '../featured';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  featured = featured;

  constructor() { }

  ngOnInit(): void {
  }

}
