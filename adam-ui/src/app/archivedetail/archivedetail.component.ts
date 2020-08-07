import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-archivedetail',
  templateUrl: './archivedetail.component.html',
  styleUrls: ['./archivedetail.component.css']
})
export class ArchivedetailComponent implements OnInit {

    public archiveCategories = [];
    archiveCategory;
    searchText;

	constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

	ngOnInit(): void {

        let catSlug;
        let catIndex;

        this.route.paramMap.subscribe(params => {
            catSlug = params.get('categoryId');
        });

        this._apirequestsService.getData()
            .subscribe(data => {
                this.archiveCategories = Object.values(data);

                    for (var index in this.archiveCategories) {
                        if(this.archiveCategories[index].name.toLowerCase() == catSlug ) {
                            catIndex = index;
                        }
                    };
                    this.archiveCategory = this.archiveCategories[catIndex];
                });

    }

}