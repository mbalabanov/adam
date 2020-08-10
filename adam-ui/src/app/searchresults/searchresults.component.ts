import { ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
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
  @Input('data') allData: Array<object> = [];

  public filter: string = '';
  public maxSize: number = 7;
  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 8,
      currentPage: 1
  };
  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };
  public eventLog: string[] = [];

  private popped = [];

  onPageChange(number: number) {
      this.logEvent(`pageChange(${number})`);
      this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
      this.logEvent(`pageBoundsCorrection(${number})`);
      this.config.currentPage = number;
  }

  pushItem() {
      let item = this.popped.pop() || 'A newly-created meal!';
      this.allData.push(item);
  }

  popItem() {
      this.popped.push(this.allData.pop());
  }

  private logEvent(message: string) {
      this.eventLog.unshift(`${new Date().toISOString()}: ${message}`)
  }
  
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
