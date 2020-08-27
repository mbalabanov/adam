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

  replaceUnreadables(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  saveCompliancePages() {

    this.compliancePagesOriginal.content = [];

    // articletext contains HTML. For some reason '=' and '&' cannot be read by the API. This replaces them in the articletext.
    this.compliancePagesEdited.value.complianceabout.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceabout.articletext, '=', '<EQUALS>');
    this.compliancePagesEdited.value.complianceabout.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceabout.articletext, '&', '<AMPERSAND>');
    this.compliancePagesEdited.value.complianceprivacy.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceprivacy.articletext, '=', '<EQUALS>');
    this.compliancePagesEdited.value.complianceprivacy.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceprivacy.articletext, '&', '<AMPERSAND>');
    this.compliancePagesEdited.value.complianceterms.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceterms.articletext, '=', '<EQUALS>');
    this.compliancePagesEdited.value.complianceterms.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceterms.articletext, '&', '<AMPERSAND>');
    this.compliancePagesEdited.value.complianceimprint.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceimprint.articletext, '=', '<EQUALS>');
    this.compliancePagesEdited.value.complianceimprint.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.complianceimprint.articletext, '&', '<AMPERSAND>');
    this.compliancePagesEdited.value.compliancecookies.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.compliancecookies.articletext, '=', '<EQUALS>');
    this.compliancePagesEdited.value.compliancecookies.articletext = this.replaceUnreadables(this.compliancePagesEdited.value.compliancecookies.articletext, '&', '<AMPERSAND>');

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
