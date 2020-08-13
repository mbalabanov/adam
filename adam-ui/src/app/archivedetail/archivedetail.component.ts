import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { ApirequestsService } from '../apirequests.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-archivedetail',
  templateUrl: './archivedetail.component.html',
  styleUrls: ['./archivedetail.component.css']
})
export class ArchivedetailComponent implements OnInit {

    archiveCategories: Array<object> = [];
    archiveCategory: any = {};
    searchText;

    public filter: string = '';
    public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 4,
        currentPage: 1
    };
  
    private popped = [];
  
    pushItem() {
        let item = this.popped.pop() || 'A newly-created meal!';
        this.archiveCategory.push(item);
    }
  
    popItem() {
        this.popped.push(this.archiveCategory.pop());
    }

	constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute,  public auth: AuthService) { }

	ngOnInit(): void {

        let catSlug;

        this.route.paramMap.subscribe(params => {
            catSlug = params.get('categoryId');

            switch (catSlug) {
                case 'events': {
                    this._apirequestsService.getEvents()
                    .subscribe(data => {
                        this.archiveCategory = data;
                        });
                        break;
                    }
                case 'persons': {
                    this._apirequestsService.getPersons()
                    .subscribe(data => {
                        this.archiveCategory = data;
                        });
                        break;
                    }
                case 'artifacts': {
                    this._apirequestsService.getArtifacts()
                    .subscribe(data => {
                        this.archiveCategory = data;
                        });
                        break;
                    }
            }

        });

    }

}