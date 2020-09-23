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

  compliancePages: any;
  editCompliancePages: any;

  constructor(private apirequestsService: ApirequestsService, public auth: AuthService) { }

  ngOnInit() {
    
    this.apirequestsService.getCompliance()
      .subscribe(data => {
      this.compliancePages = data;

      console.log(this.compliancePages);

      this.editCompliancePages = new FormGroup({
        complianceabout: new FormGroup({
          _id: new FormControl(this.compliancePages[0]._id, Validators.required), 
          category: new FormControl(this.compliancePages[0].category, Validators.required),
          title: new FormControl(this.compliancePages[0].title, Validators.required),
          firstimage: new FormControl(this.compliancePages[0].firstimage),
          secondimage: new FormControl(this.compliancePages[0].secondimage),
          articletext: new FormControl(this.compliancePages[0].articletext, Validators.required)
        }),
        complianceprivacy: new FormGroup({
          _id: new FormControl(this.compliancePages[1]._id, Validators.required), 
          category: new FormControl(this.compliancePages[1].category, Validators.required),
          title: new FormControl(this.compliancePages[1].title, Validators.required),
          firstimage: new FormControl(this.compliancePages[1].firstimage),
          secondimage: new FormControl(this.compliancePages[1].secondimage),
          articletext: new FormControl(this.compliancePages[1].articletext, Validators.required)
        }),
        complianceterms: new FormGroup({
          _id: new FormControl(this.compliancePages[2]._id, Validators.required),
          category: new FormControl(this.compliancePages[2].category, Validators.required),
          title: new FormControl(this.compliancePages[2].title, Validators.required),
          firstimage: new FormControl(this.compliancePages[2].firstimage),
          secondimage: new FormControl(this.compliancePages[2].secondimage),
          articletext: new FormControl(this.compliancePages[2].articletext, Validators.required)
        }),
        complianceimprint: new FormGroup({
          _id: new FormControl(this.compliancePages[3]._id, Validators.required), 
          category: new FormControl(this.compliancePages[3].category, Validators.required),
          title: new FormControl(this.compliancePages[3].title, Validators.required),
          firstimage: new FormControl(this.compliancePages[3].firstimage),
          secondimage: new FormControl(this.compliancePages[3].secondimage),
          articletext: new FormControl(this.compliancePages[3].articletext, Validators.required)
        }),
        compliancecookies: new FormGroup({
          _id: new FormControl(this.compliancePages[4]._id, Validators.required), 
          category: new FormControl(this.compliancePages[4].category, Validators.required),
          title: new FormControl(this.compliancePages[4].title, Validators.required),
          firstimage: new FormControl(this.compliancePages[4].firstimage),
          secondimage: new FormControl(this.compliancePages[4].secondimage),
          articletext: new FormControl(this.compliancePages[4].articletext, Validators.required)
        }),
      });
    });

  }

  saveCompliancePages() {
    this.apirequestsService.putCompliancePages(JSON.stringify(this.editCompliancePages.value.complianceabout)).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putCompliancePages(JSON.stringify(this.editCompliancePages.value.complianceprivacy)).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putCompliancePages(JSON.stringify(this.editCompliancePages.value.complianceterms)).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putCompliancePages(JSON.stringify(this.editCompliancePages.value.complianceimprint)).subscribe((data)=>{
      console.log('Request successful');
    });
    this.apirequestsService.putCompliancePages(JSON.stringify(this.editCompliancePages.value.compliancecookies)).subscribe((data)=>{
      console.log('Request successful');
    });

  }
}
