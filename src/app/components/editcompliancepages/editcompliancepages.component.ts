import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';
import { DomSanitizer, SafeHtml, SafeStyle, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-editcompliancepages',
  templateUrl: './editcompliancepages.component.html',
  styleUrls: ['./editcompliancepages.component.css']
})
export class EditcompliancepagesComponent implements OnInit {

  compliancePagesOriginal: any;
  compliancePagesEdited = new FormGroup({ });
  compliancePagesItemsArray: Array<any> = [];  

  constructor(private apirequestsService: ApirequestsService, public auth: AuthService, protected sanitizer: DomSanitizer ) { }

  ngOnInit() {

    this.apirequestsService.getCompliance()
      .subscribe(data => {
      this.compliancePagesOriginal = data;
      this.compliancePagesItemsArray = this.compliancePagesOriginal.content;

      this.compliancePagesEdited = new FormGroup({
        complianceabout: new FormGroup({
          id: new FormControl(this.compliancePagesOriginal.content[0].id, Validators.required), 
          category: new FormControl(this.compliancePagesOriginal.content[0].category, Validators.required),
          title: new FormControl(this.compliancePagesOriginal.content[0].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesOriginal.content[0].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesOriginal.content[0].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesOriginal.content[0].articletext, Validators.required)
        }),
        complianceprivacy: new FormGroup({
          id: new FormControl(this.compliancePagesOriginal.content[1].id, Validators.required), 
          category: new FormControl(this.compliancePagesOriginal.content[1].category, Validators.required),
          title: new FormControl(this.compliancePagesOriginal.content[1].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesOriginal.content[1].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesOriginal.content[1].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesOriginal.content[1].articletext, Validators.required)
        }),
        complianceterms: new FormGroup({
          id: new FormControl(this.compliancePagesOriginal.content[2].id, Validators.required), 
          category: new FormControl(this.compliancePagesOriginal.content[2].category, Validators.required),
          title: new FormControl(this.compliancePagesOriginal.content[2].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesOriginal.content[2].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesOriginal.content[2].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesOriginal.content[2].articletext, Validators.required)
        }),
        complianceimprint: new FormGroup({
          id: new FormControl(this.compliancePagesOriginal.content[3].id, Validators.required), 
          category: new FormControl(this.compliancePagesOriginal.content[3].category, Validators.required),
          title: new FormControl(this.compliancePagesOriginal.content[3].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesOriginal.content[3].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesOriginal.content[3].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesOriginal.content[3].articletext, Validators.required)
        }),
        compliancecookies: new FormGroup({
          id: new FormControl(this.compliancePagesOriginal.content[4].id, Validators.required), 
          category: new FormControl(this.compliancePagesOriginal.content[4].category, Validators.required),
          title: new FormControl(this.compliancePagesOriginal.content[4].title, Validators.required),
          firstimage: new FormControl(this.compliancePagesOriginal.content[4].firstimage, Validators.required),
          secondimage: new FormControl(this.compliancePagesOriginal.content[4].secondimage, Validators.required),
          articletext: new FormControl(this.compliancePagesOriginal.content[4].articletext, Validators.required)
        }),
      });
    });

  }


  saveCompliancePages() {

    this.compliancePagesOriginal.content = [];

    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceabout);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceprivacy);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceterms);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.complianceimprint);
    this.compliancePagesOriginal.content.push(this.compliancePagesEdited.value.compliancecookies);

    this.apirequestsService.putCompliancePages(JSON.stringify(this.compliancePagesOriginal.content)).subscribe((data)=>{
      console.log('Request successful');
    });

  }

}
