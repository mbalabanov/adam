import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-editcarouselfeatures',
  templateUrl: './editcarouselfeatures.component.html',
  styleUrls: ['./editcarouselfeatures.component.css']
})
export class EditcarouselfeaturesComponent implements OnInit {

  featured: any = {};

  constructor(private _apirequestsService: ApirequestsService) { }
  
  ngOnInit(): void {

    this._apirequestsService.getFeatured()
      .subscribe(featuredData => {
      this.featured = featuredData.content;
    });

  }

}