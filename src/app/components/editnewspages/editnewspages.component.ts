import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-editnewspages',
  templateUrl: './editnewspages.component.html',
  styleUrls: ['./editnewspages.component.css']
})
export class EditnewspagesComponent implements OnInit {

  newsOriginal: any;
  newsEdited = new FormGroup({ });
  newsItemsArray: Array<any> = [];

  constructor( private apirequestsService: ApirequestsService, public auth: AuthService ) { }

  ngOnInit(): void {

    this.apirequestsService.getNews()
        .subscribe(newsdata => {
        this.newsOriginal = newsdata;
        this.newsItemsArray = this.newsOriginal;

        this.newsEdited = new FormGroup({
          news0: new FormGroup({
            _id: new FormControl(this.newsItemsArray[0]._id, Validators.required), 
            uniquename: new FormControl(this.newsItemsArray[0].uniquename, Validators.required),
            title: new FormControl(this.newsItemsArray[0].title, Validators.required),
            image: new FormControl(this.newsItemsArray[0].image),
            largeimage: new FormControl(this.newsItemsArray[0].largeimage),
            shortdescription: new FormControl(this.newsItemsArray[0].shortdescription, Validators.required),
            articletext: new FormControl(this.newsItemsArray[0].articletext, Validators.required)
          }),
          news1: new FormGroup({
            _id: new FormControl(this.newsItemsArray[1]._id, Validators.required), 
            uniquename: new FormControl(this.newsItemsArray[1].uniquename, Validators.required),
            title: new FormControl(this.newsItemsArray[1].title, Validators.required),
            image: new FormControl(this.newsItemsArray[1].image),
            largeimage: new FormControl(this.newsItemsArray[1].largeimage),
            shortdescription: new FormControl(this.newsItemsArray[1].shortdescription, Validators.required),
            articletext: new FormControl(this.newsItemsArray[1].articletext, Validators.required)
          }),
          news2: new FormGroup({
            _id: new FormControl(this.newsItemsArray[2]._id, Validators.required), 
            uniquename: new FormControl(this.newsItemsArray[2].uniquename, Validators.required),
            title: new FormControl(this.newsItemsArray[2].title, Validators.required),
            image: new FormControl(this.newsItemsArray[2].image),
            largeimage: new FormControl(this.newsItemsArray[2].largeimage),
            shortdescription: new FormControl(this.newsItemsArray[2].shortdescription, Validators.required),
            articletext: new FormControl(this.newsItemsArray[2].articletext, Validators.required)
          }),
        });
      });

  }

  saveNews() {
    this.apirequestsService.putNewsArticles(JSON.stringify(this.newsEdited.value.news0)).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putNewsArticles(JSON.stringify(this.newsEdited.value.news1)).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putNewsArticles(JSON.stringify(this.newsEdited.value.news2)).subscribe((data)=>{
      console.log('Request successful');
    });
  }
}
