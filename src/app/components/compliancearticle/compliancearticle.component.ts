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

  replaceUnreadables(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  ngOnInit(): void {

    let catSlug;

    this.route.paramMap.subscribe(params => {
        catSlug = params.get('categoryId');

        this.apirequestsService.getCompliancePage(catSlug)
        .subscribe(data => {
          this.complianceCategory = data;

          // articletext contains HTML. For some reason '=' and '&' cannot be read by the API. So they are replaced with placeholders. This replaces the placeholders back into their original state.
          this.complianceCategory.articletext = this.replaceUnreadables(this.complianceCategory.articletext, '<EQUALS>', '=');
          this.complianceCategory.articletext = this.replaceUnreadables(this.complianceCategory.articletext, '<AMPERSAND>', '&');

        });

    });

  }

}
