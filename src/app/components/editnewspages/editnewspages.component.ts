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
            id: new FormControl(this.newsOriginal.content[0].id, Validators.required), 
            title: new FormControl(this.newsOriginal.content[0].title, Validators.required),
            image: new FormControl(this.newsOriginal.content[0].image, Validators.required),
            largeimage: new FormControl(this.newsOriginal.content[0].largeimage, Validators.required),
            shortdescription: new FormControl(this.newsOriginal.content[0].shortdescription, Validators.required),
            articletext: new FormControl(this.newsOriginal.content[0].articletext, Validators.required)
          }),
          newsn1: new FormGroup({
            id: new FormControl(this.newsOriginal.content[1].id, Validators.required), 
            title: new FormControl(this.newsOriginal.content[1].title, Validators.required),
            image: new FormControl(this.newsOriginal.content[1].image, Validators.required),
            largeimage: new FormControl(this.newsOriginal.content[1].largeimage, Validators.required),
            shortdescription: new FormControl(this.newsOriginal.content[1].shortdescription, Validators.required),
            articletext: new FormControl(this.newsOriginal.content[1].articletext, Validators.required)
          }),
          newsn2: new FormGroup({
            id: new FormControl(this.newsOriginal.content[2].id, Validators.required), 
            title: new FormControl(this.newsOriginal.content[2].title, Validators.required),
            image: new FormControl(this.newsOriginal.content[2].image, Validators.required),
            largeimage: new FormControl(this.newsOriginal.content[2].largeimage, Validators.required),
            shortdescription: new FormControl(this.newsOriginal.content[2].shortdescription, Validators.required),
            articletext: new FormControl(this.newsOriginal.content[2].articletext, Validators.required)
          }),
        });
      });

  }

  replaceUnreadables(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  saveNews() {

    this.newsOriginal.content = [];

    // articletext contains HTML. For some reason '=' and '&' cannot be read by the API. This replaces them in the articletext.
    this.newsEdited.value.newsn0.articletext = this.replaceUnreadables(this.newsEdited.value.newsn0.articletext, '=', '<EQUALS>');
    this.newsEdited.value.newsn0.articletext = this.replaceUnreadables(this.newsEdited.value.newsn0.articletext, '&', '<AMPERSAND>');
    this.newsEdited.value.newsn1.articletext = this.replaceUnreadables(this.newsEdited.value.newsn1.articletext, '=', '<EQUALS>');
    this.newsEdited.value.newsn1.articletext = this.replaceUnreadables(this.newsEdited.value.newsn1.articletext, '&', '<AMPERSAND>');
    this.newsEdited.value.newsn2.articletext = this.replaceUnreadables(this.newsEdited.value.newsn2.articletext, '=', '<EQUALS>');
    this.newsEdited.value.newsn2.articletext = this.replaceUnreadables(this.newsEdited.value.newsn2.articletext, '&', '<AMPERSAND>');

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
