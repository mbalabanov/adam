import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-editnewspages',
  templateUrl: './editnewspages.component.html',
  styleUrls: ['./editnewspages.component.css']
})
export class EditnewspagesComponent implements OnInit {

  news: any = {};

  constructor( private apirequestsService: ApirequestsService, public auth: AuthService ) { }

  ngOnInit(): void {

    this.apirequestsService.getNews()
        .subscribe(newsdata => {
        this.news = newsdata.content;
    });

  }

}
