import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-newsarticle',
  templateUrl: './newsarticle.component.html',
  styleUrls: ['./newsarticle.component.css']
})
export class NewsarticleComponent implements OnInit {
  newsitems;
  newsitem;

  constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let articleSlug;

    this.route.paramMap.subscribe(params => {
      articleSlug = params.get('postId');
      this._apirequestsService.getNewsItem(articleSlug)
      .subscribe(news => {
          this.newsitem = news;
      });
      this._apirequestsService.getNews()
      .subscribe(news => {
          this.newsitems = news;
      });
    });
  
  }

}
