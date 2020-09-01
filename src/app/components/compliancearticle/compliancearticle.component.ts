import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-compliancearticle',
  templateUrl: './compliancearticle.component.html',
  styleUrls: ['./compliancearticle.component.css']
})
export class CompliancearticleComponent implements OnInit {

  complianceCategories: Array<object> = [];
  complianceCategory: any = {};

	constructor(private apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let catSlug;

    this.route.paramMap.subscribe(params => {
        catSlug = params.get('categoryId');

        this.apirequestsService.getCompliancePage(catSlug)
        .subscribe(data => {
          this.complianceCategory = data;
        });

    });
    
  }

}
