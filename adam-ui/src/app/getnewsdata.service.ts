import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetnewsdataService {
/*
  private newsUrl: string = 'https://adam-interface.herokuapp.com/news';
  articleSlug: string;

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(this.newsUrl);
  }

  this.route.paramMap.subscribe(params => {
      articleSlug = params.get('postId');
  });

  this._apirequestsService.getNews()
      .subscribe(news => {
          this.newsitems = news;
          this.newsitem = this.newsitems.content[articleSlug];
          console.log(this.newsitem);
        });
*/
}
