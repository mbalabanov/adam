import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-searchall',
  templateUrl: './searchall.component.html',
  styleUrls: ['./searchall.component.css']
})
export class SearchallComponent implements OnInit {

  allData: any = [];
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
  
	constructor(private apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

	ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.searchSlug = params.get('params');
      this.searchText = this.searchSlug;

      this.apirequestsService.getData().subscribe(data => {
        this.allData = data;
      });

    });

  }

}
