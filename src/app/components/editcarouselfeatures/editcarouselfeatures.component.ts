import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-editcarouselfeatures',
  templateUrl: './editcarouselfeatures.component.html',
  styleUrls: ['./editcarouselfeatures.component.css']
})
export class EditcarouselfeaturesComponent implements OnInit {

  featuredOriginal: any;
  featuredEdited = new FormGroup({ });
  featuredItemsArray: Array<any> = [];

  constructor(private apirequestsService: ApirequestsService, public auth: AuthService) { }
  
  ngOnInit() {

    this.apirequestsService.getFeatured()
      .subscribe(featuredData => {
      this.featuredOriginal = featuredData;
      this.featuredItemsArray = this.featuredOriginal.content;

      this.featuredEdited = new FormGroup({
        featured0: new FormGroup({
          id: new FormControl(this.featuredOriginal.content[0].id, Validators.required),
          image: new FormControl(this.featuredOriginal.content[0].image, Validators.required),
          title: new FormControl(this.featuredOriginal.content[0].title, Validators.required),
          description: new FormControl(this.featuredOriginal.content[0].description, Validators.required),
          link: new FormControl(this.featuredOriginal.content[0].link, Validators.required)
        }),
        featured1: new FormGroup({
          id: new FormControl(this.featuredOriginal.content[1].id, Validators.required), 
          image: new FormControl(this.featuredOriginal.content[1].image, Validators.required),
          title: new FormControl(this.featuredOriginal.content[1].title, Validators.required),
          description: new FormControl(this.featuredOriginal.content[1].description, Validators.required),
          link: new FormControl(this.featuredOriginal.content[1].link, Validators.required)
        }),
        featured2: new FormGroup({
          id: new FormControl(this.featuredOriginal.content[2].id, Validators.required),
          image: new FormControl(this.featuredOriginal.content[2].image, Validators.required),
          title: new FormControl(this.featuredOriginal.content[2].title, Validators.required),
          description: new FormControl(this.featuredOriginal.content[2].description, Validators.required),
          link: new FormControl(this.featuredOriginal.content[2].link, Validators.required)
        }),
        featured3: new FormGroup({
          id: new FormControl(this.featuredOriginal.content[3].id, Validators.required),
          image: new FormControl(this.featuredOriginal.content[3].image, Validators.required),
          title: new FormControl(this.featuredOriginal.content[3].title, Validators.required),
          description: new FormControl(this.featuredOriginal.content[3].description, Validators.required),
          link: new FormControl(this.featuredOriginal.content[3].link, Validators.required)
        })
      });
    });
  }

  saveFeaturedItems() {

    this.featuredOriginal.content = [];

    this.featuredOriginal.content.push(this.featuredEdited.value.featured0);
    this.featuredOriginal.content.push(this.featuredEdited.value.featured1);
    this.featuredOriginal.content.push(this.featuredEdited.value.featured2);
    this.featuredOriginal.content.push(this.featuredEdited.value.featured3);

    this.apirequestsService.putFeaturedItem(this.featuredOriginal.content).subscribe((data)=>{
      console.log('Request successful');
    });

  }

}
