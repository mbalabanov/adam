import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-list',
  templateUrl: './archivelist.component.html',
  styleUrls: ['./archivelist.component.css']
})
export class ArchivelistComponent implements OnInit {

  artifactCategory: any = {};
  eventCategory: any = {};
  personCategory: any = {};

  artifactImage: any = {};
  personImage: any = {};
  eventImage: any = {};

  constructor(private _apirequestsService: ApirequestsService) { }
  
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
        this.artifactImage = this.eventCategory.images[0];
      });

    this._apirequestsService.getPerson(randomCategoryID3)
        .subscribe(data => {
        this.personCategory = data;
        this.personImage = this.personCategory.images[0];
});

  }

}
