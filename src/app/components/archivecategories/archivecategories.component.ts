import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../../services/apirequests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archivecategories',
  templateUrl: './archivecategories.component.html',
  styleUrls: ['./archivecategories.component.css']
})
export class ArchivecategoriesComponent implements OnInit {
  searchString: Object = {};

  artifactCategory: any = {};
  eventCategory: any = {};
  personCategory: any = {};

  artifactImage: any = {};
  personImage: any = {};
  eventImage: any = {};

  constructor(private _apirequestsService: ApirequestsService, private router: Router) { }
  
  onpageSearch(value) {
    this.router.navigateByUrl('/search/' + value.onpageSearchInput);
  }

  ngOnInit(): void {

    var randomCategoryID1 = 'a' + Math.floor(Math.random() * 5);
    var randomCategoryID2 = 'e' +  Math.floor(Math.random() * 5);
    var randomCategoryID3 = 'p' +  Math.floor(Math.random() * 5);

    this._apirequestsService.getArtifact(randomCategoryID1)
        .subscribe(data => {
        this.artifactCategory = data;
        this.artifactImage = this.artifactCategory.images[0];
    });

    this._apirequestsService.getEvent(randomCategoryID2)
        .subscribe(data => {
        this.eventCategory = data;
        this.eventImage = this.eventCategory.images[0];
      });

    this._apirequestsService.getPerson(randomCategoryID3)
        .subscribe(data => {
        this.personCategory = data;
        this.personImage = this.personCategory.images[0];
    });

  }

}
