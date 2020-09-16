import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  featured: any = [];

  constructor(private apirequestsService: ApirequestsService) { }

  ngOnInit(): void {

    this.apirequestsService.getFeatured()
        .subscribe(featuredData => {
        this.featured = featuredData;
    });

  }

}
