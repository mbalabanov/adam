import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-editcompliancepages',
  templateUrl: './editcompliancepages.component.html',
  styleUrls: ['./editcompliancepages.component.css']
})
export class EditcompliancepagesComponent implements OnInit {

  compliancePages: Array<object> = [];

  constructor(private _apirequestsService: ApirequestsService, public auth: AuthService ) { }

  ngOnInit(): void {

    this._apirequestsService.getCompliance()
      .subscribe(data => {
      this.compliancePages = data.content;
    });

  }

}
