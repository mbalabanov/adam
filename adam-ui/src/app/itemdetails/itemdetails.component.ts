import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

	public archiveCategories = [];
	archiveCategory;
	archiveItem;

	constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

	ngOnInit(): void {

        let catSlug;
        let itemSlug;
        let catIndex;

        this.route.paramMap.subscribe(params => {
            catSlug = params.get('categoryId');
            itemSlug = params.get('itemId');
        });

        this._apirequestsService.getData()
            .subscribe(data => {
                this.archiveCategories = Object.values(data);

                    for (var i = 0; i < this.archiveCategories.length; i += 1) {
                        if(this.archiveCategories[i].name.toLowerCase() == catSlug ) {
                            catIndex = i;
                        }
                    };
                    this.archiveCategory = this.archiveCategories[catIndex];
                    this.archiveItem = this.archiveCategories[catIndex].content[itemSlug];
            });

    }

}
