import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.css']
})
export class ComplianceComponent implements OnInit {

  public complianceCategories = [];
  complianceCategory;

	constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let catSlug;
    let catIndex;

    this.route.paramMap.subscribe(params => {
        catSlug = params.get('categoryId');
        console.log(catSlug)
    });

    this._apirequestsService.getCompliance()
        .subscribe(data => {
            console.log(data);
            this.complianceCategories = Object.values(data);
            console.log(this.complianceCategories[0].category);
                for (var index in this.complianceCategories) {
                    if(this.complianceCategories[index].category == catSlug ) {
                        catIndex = index;
                    }
                };
                this.complianceCategory = this.complianceCategories[catIndex];
            });

  }

}