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

  replaceUnreadables(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  ngOnInit(): void {

    let articleSlug;

    this.route.paramMap.subscribe(params => {
      articleSlug = params.get('postId');
      this.apirequestsService.getNewsItem(articleSlug)
      .subscribe(news => {
          this.newsitem = news;

          // articletext contains HTML. For some reason '=' and '&' cannot be read by the API. So they are replaced with placeholders. This replaces the placeholders back into their original state.
          this.newsitem.articletext = this.replaceUnreadables(this.newsitem.articletext, '<EQUALS>', '=');
          this.newsitem.articletext = this.replaceUnreadables(this.newsitem.articletext, '<AMPERSAND>', '&');
      });
      this.apirequestsService.getNews()
      .subscribe(news => {
          this.newsitems = news;
      });
    });
  
  }

}
