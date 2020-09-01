import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-editcompliancepages',
  templateUrl: './editcompliancepages.component.html',
  styleUrls: ['./editcompliancepages.component.css']
})
export class EditcompliancepagesComponent implements OnInit {

  compliancePagesOriginal: any;
  compliancePagesEdited = new FormGroup({ });
  compliancePagesItemsArray: Array<any> = [];  

  constructor(private apirequestsService: ApirequestsService, public auth: AuthService) { }

  ngOnInit() {
    
    this.apirequestsService.getCompliance()
      .subscribe(data => {
      this.compliancePagesOriginal = data;
      this.compliancePagesItemsArray = this.compliancePagesOriginal.content;

      console.log(this.compliancePagesItemsArray);

      this.compliancePagesEdited = new FormGroup({
        complianceabout: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[0].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[0].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[0].firstimage),
          secondimage: new FormControl(this.compliancePagesItemsArray[0].secondimage),
          articletext: new FormControl(this.compliancePagesItemsArray[0].articletext, Validators.required)
        }),
        complianceprivacy: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[1].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[1].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[1].firstimage),
          secondimage: new FormControl(this.compliancePagesItemsArray[1].secondimage),
          articletext: new FormControl(this.compliancePagesItemsArray[1].articletext, Validators.required)
        }),
        complianceterms: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[2].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[2].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[2].firstimage),
          secondimage: new FormControl(this.compliancePagesItemsArray[2].secondimage),
          articletext: new FormControl(this.compliancePagesItemsArray[2].articletext, Validators.required)
        }),
        complianceimprint: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[3].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[3].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[3].firstimage),
          secondimage: new FormControl(this.compliancePagesItemsArray[3].secondimage),
          articletext: new FormControl(this.compliancePagesItemsArray[3].articletext, Validators.required)
        }),
        compliancecookies: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[4].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[4].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[4].firstimage),
          secondimage: new FormControl(this.compliancePagesItemsArray[4].secondimage),
          articletext: new FormControl(this.compliancePagesItemsArray[4].articletext, Validators.required)
        }),
      });
    });

  }

    // Get the required fields for validation
    get title() {
      return this.compliancePagesEdited.get('title'); // The compliance page needs a title
    }

    get articletext() {
      return this.compliancePagesEdited.get('articletext'); // The compliance page needs a text
    }

  saveCompliancePages() {

    this.compliancePagesOriginal.content = [];

    // Push edited news into emptied compliance array
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceabout);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceprivacy);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceterms);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceimprint);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.compliancecookies);

    console.log(this.compliancePagesOriginal);

    this.apirequestsService.putCompliancePages(JSON.stringify(this.compliancePagesOriginal)).subscribe((data)=>{
      console.log('Request successful');
    });

  }
}
