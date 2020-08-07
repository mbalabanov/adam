import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public newsitems;

  constructor(private _apirequestsService: ApirequestsService) { }

  ngOnInit(): void {

    this._apirequestsService.getNews()
        .subscribe(news => {
        this.newsitems = news;
    });

  }

}
