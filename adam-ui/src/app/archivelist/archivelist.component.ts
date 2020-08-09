import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-list',
  templateUrl: './archivelist.component.html',
  styleUrls: ['./archivelist.component.css']
})
export class ArchivelistComponent implements OnInit {

  public artifactCategory;
  public eventCategory;
  public personCategory;

  constructor(private _apirequestsService: ApirequestsService) { }
  
  ngOnInit(): void {

    var randomCategoryID1 = Math.floor(Math.random() * 4);
    var randomCategoryID2 = Math.floor(Math.random() * 4);
    var randomCategoryID3 = Math.floor(Math.random() * 4);

    this._apirequestsService.getArtifact(randomCategoryID1)
        .subscribe(data => {
        this.artifactCategory = data;
    });

    this._apirequestsService.getEvent(randomCategoryID2)
        .subscribe(data => {
        this.eventCategory = data;
    });

    this._apirequestsService.getPerson(randomCategoryID3)
        .subscribe(data => {
        this.personCategory = data;
    });

  }

}
