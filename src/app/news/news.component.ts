import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsitems: any = {};

  constructor(private _apirequestsService: ApirequestsService) { }

  ngOnInit(): void {

    this._apirequestsService.getNews()
        .subscribe(news => {
        this.newsitems = news;
    });

  }

}
