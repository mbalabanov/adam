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
        this.newsItemsArray = this.newsOriginal.content;

        this.newsEdited = new FormGroup({
          newsn0: new FormGroup({
            id: new FormControl(this.newsItemsArray[0].id, Validators.required), 
            title: new FormControl(this.newsItemsArray[0].title, Validators.required),
            image: new FormControl(this.newsItemsArray[0].image),
            largeimage: new FormControl(this.newsItemsArray[0].largeimage),
            shortdescription: new FormControl(this.newsItemsArray[0].shortdescription, Validators.required),
            articletext: new FormControl(this.newsItemsArray[0].articletext, Validators.required)
          }),
          newsn1: new FormGroup({
            id: new FormControl(this.newsItemsArray[1].id, Validators.required), 
            title: new FormControl(this.newsItemsArray[1].title, Validators.required),
            image: new FormControl(this.newsItemsArray[1].image),
            largeimage: new FormControl(this.newsItemsArray[1].largeimage),
            shortdescription: new FormControl(this.newsItemsArray[1].shortdescription, Validators.required),
            articletext: new FormControl(this.newsItemsArray[1].articletext, Validators.required)
          }),
          newsn2: new FormGroup({
            id: new FormControl(this.newsItemsArray[2].id, Validators.required), 
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

    this.newsOriginal.content = [];

    // Push edited news into emptied news array
    this.newsOriginal.content.push(this.newsEdited.value.newsn0);
    this.newsOriginal.content.push(this.newsEdited.value.newsn1);
    this.newsOriginal.content.push(this.newsEdited.value.newsn2);

    console.log(this.newsOriginal);

    this.apirequestsService.putNewsArticles(JSON.stringify(this.newsOriginal)).subscribe((data)=>{
      console.log('Request successful');
    });

  }
}
