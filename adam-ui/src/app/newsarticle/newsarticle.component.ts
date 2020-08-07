import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-newsarticle',
  templateUrl: './newsarticle.component.html',
  styleUrls: ['./newsarticle.component.css']
})
export class NewsarticleComponent implements OnInit {
  public newsitems;
  newsitem;

  constructor(private _apirequestsService: ApirequestsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let articleSlug;
    let articleIndex;

    this.route.paramMap.subscribe(params => {
        articleSlug = params.get('postId');
    });

    this._apirequestsService.getNews()
        .subscribe(news => {
            this.newsitems = news;
                console.log(this.newsitems.content);
                for (var i = 0; i < this.newsitems.content.length; i += 1) {
                    if(this.newsitems.content[i].urlAddress.toLowerCase() == articleSlug ) {
                        articleIndex = i;
                    }
                };
                this.newsitem = this.newsitems.content[articleIndex];
        });

  }

}
