import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public featured;

  constructor(private _apirequestsService: ApirequestsService) { }

  ngOnInit(): void {

    this._apirequestsService.getFeatured()
        .subscribe(featured => {
        this.featured = featured;
    });

  }

}
