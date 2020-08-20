import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  newsitems: any = {};

  constructor(private _apirequestsService: ApirequestsService) { }

  ngOnInit(): void {

    this._apirequestsService.getNews()
        .subscribe(news => {
        this.newsitems = news;
    });

  }

}
