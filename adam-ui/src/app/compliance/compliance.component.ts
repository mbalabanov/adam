import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.css']
})
export class ComplianceComponent implements OnInit {

  complianceCategories: Array<object> = [];
  complianceCategory: any = {};

	constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let catSlug;
    let catIndex;

    this.route.paramMap.subscribe(params => {
        catSlug = params.get('categoryId');

        this._apirequestsService.getCompliancePage(catSlug)
        .subscribe(data => {
          this.complianceCategory = data;
        });

    });

  }

}
