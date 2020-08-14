import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  featured: any = {};
  news: any = {};
  compliancePages: Array<object> = [];

  constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {

    this._apirequestsService.getFeatured()
        .subscribe(featuredData => {
        this.featured = featuredData.content;
    });

    this._apirequestsService.getNews()
        .subscribe(newsdata => {
        this.news = newsdata.content;
        console.log(this.news);
    });

    this._apirequestsService.getCompliance()
    .subscribe(data => {
      this.compliancePages = data.content;
    });

  }

}
