import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-newsarticle',
  templateUrl: './newsarticle.component.html',
  styleUrls: ['./newsarticle.component.css']
})
export class NewsarticleComponent implements OnInit {
  newsitems: any = {};
  newsitem: any = {};

  constructor(private apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let articleSlug;

    this.route.paramMap.subscribe(params => {
      articleSlug = params.get('postId');
      console.log('Web-Frontend')
      this.apirequestsService.getNewsItem(articleSlug)
      .subscribe(news => {
        this.newsitem = news;
      });
      this.apirequestsService.getNews()
        .subscribe(news => {
        this.newsitems = news;
      });
    });
  
  }

}
