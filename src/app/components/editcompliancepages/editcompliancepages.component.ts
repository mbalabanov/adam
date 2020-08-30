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

      this.compliancePagesEdited = new FormGroup({
        complianceabout: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[0].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[0].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[0].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesItemsArray[0].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesItemsArray[0].articletext, Validators.required)
        }),
        complianceprivacy: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[1].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[1].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[1].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesItemsArray[1].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesItemsArray[1].articletext, Validators.required)
        }),
        complianceterms: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[2].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[2].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[2].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesItemsArray[2].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesItemsArray[2].articletext, Validators.required)
        }),
        complianceimprint: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[3].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[3].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[3].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesItemsArray[3].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesItemsArray[3].articletext, Validators.required)
        }),
        compliancecookies: new FormGroup({
          id: new FormControl(this.compliancePagesItemsArray[4].id, Validators.required), 
          title: new FormControl(this.compliancePagesItemsArray[4].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesItemsArray[4].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesItemsArray[4].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesItemsArray[4].articletext, Validators.required)
        }),
      });
    });

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
