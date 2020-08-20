import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchresultsComponent implements OnInit {

  rawData: any = {};
  allArtifacts: Array<object> = [];
  allPersons: Array<object> = [];
  allEvents: Array<object> = [];
  allData: Array<object> = [];
  searchText = '';
  searchSlug;

  public filter: string = '';
  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 8,
      currentPage: 1
  };

  private popped = [];

  pushItem() {
      let item = this.popped.pop() || 'A newly-created meal!';
      this.allData.push(item);
  }

  popItem() {
      this.popped.push(this.allData.pop());
  }
  
	constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

	ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.searchSlug = params.get('params');
      this.searchText = this.searchSlug;

      this._apirequestsService.getData().subscribe(data => {
        this.rawData = data;
        this.allArtifacts = this.rawData.artifacts.content;
        this.allPersons = this.rawData.persons.content;
        this.allEvents = this.rawData.events.content;
        this.allData = this.allArtifacts.concat(this.allPersons, this.allEvents);
      });

    });

  }

}
