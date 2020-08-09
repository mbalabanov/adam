import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

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

        this.route.paramMap.subscribe(params => {
            catSlug = params.get('categoryId');
        });

        switch (catSlug) {
            case 'events':
                this._apirequestsService.getEvents()
                .subscribe(data => {
                    this.archiveCategory = data;
                    });
            case 'persons':
                this._apirequestsService.getPersons()
                .subscribe(data => {
                    this.archiveCategory = data;
                    });
            default:
                this._apirequestsService.getArtifacts()
                .subscribe(data => {
                    this.archiveCategory = data;
                    });
          }

    }

}