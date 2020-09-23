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
      this.featuredItemsArray = this.featuredOriginal;

      this.featuredEdited = new FormGroup({
        featured0: new FormGroup({
          _id: new FormControl(this.featuredOriginal[0]._id, Validators.required),
          image: new FormControl(this.featuredOriginal[0].image, Validators.required),
          title: new FormControl(this.featuredOriginal[0].title, Validators.required),
          description: new FormControl(this.featuredOriginal[0].description, Validators.required),
          link: new FormControl(this.featuredOriginal[0].link, Validators.required)
        }),
        featured1: new FormGroup({
          _id: new FormControl(this.featuredOriginal[1]._id, Validators.required), 
          image: new FormControl(this.featuredOriginal[1].image, Validators.required),
          title: new FormControl(this.featuredOriginal[1].title, Validators.required),
          description: new FormControl(this.featuredOriginal[1].description, Validators.required),
          link: new FormControl(this.featuredOriginal[1].link, Validators.required)
        }),
        featured2: new FormGroup({
          _id: new FormControl(this.featuredOriginal[2]._id, Validators.required),
          image: new FormControl(this.featuredOriginal[2].image, Validators.required),
          title: new FormControl(this.featuredOriginal[2].title, Validators.required),
          description: new FormControl(this.featuredOriginal[2].description, Validators.required),
          link: new FormControl(this.featuredOriginal[2].link, Validators.required)
        }),
        featured3: new FormGroup({
          _id: new FormControl(this.featuredOriginal[3]._id, Validators.required),
          image: new FormControl(this.featuredOriginal[3].image, Validators.required),
          title: new FormControl(this.featuredOriginal[3].title, Validators.required),
          description: new FormControl(this.featuredOriginal[3].description, Validators.required),
          link: new FormControl(this.featuredOriginal[3].link, Validators.required)
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

    this.apirequestsService.putFeaturedItem(this.featuredEdited.value.featured0).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putFeaturedItem(this.featuredEdited.value.featured1).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putFeaturedItem(this.featuredEdited.value.featured2).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putFeaturedItem(this.featuredEdited.value.featured3).subscribe((data)=>{
      console.log('Request successful');
    });

  }

}
