import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  featured: any = {};

  constructor(private _apirequestsService: ApirequestsService) { }

  ngOnInit(): void {

    this._apirequestsService.getFeatured()
        .subscribe(featuredData => {
        this.featured = featuredData;
    });

  }

}
