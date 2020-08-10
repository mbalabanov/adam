import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  public filter: string = '';

  rawData: any = {};
  allArtifacts: Array<object> = [];
  allPersons: Array<object> = [];
  allEvents: Array<object> = [];
  allData: Array<object> = [];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 8,
    currentPage: 1
  };
 
	constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

	ngOnInit(): void {

    this._apirequestsService.getData()
        .subscribe(data => {
        this.rawData = data;
        this.allArtifacts = this.rawData.artifacts.content;
        this.allPersons = this.rawData.persons.content;
        this.allEvents = this.rawData.events.content;
        this.allData = this.allArtifacts.concat(this.allPersons, this.allEvents);
        console.log(this.allData);
    });

  }

}
