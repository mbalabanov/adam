import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../../services/apirequests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-archivecategories',
  templateUrl: './archivecategories.component.html',
  styleUrls: ['./archivecategories.component.css']
})

export class ArchivecategoriesComponent implements OnInit {
  searchString: Object = {};

  constructor(private apirequestsService: ApirequestsService, private router: Router) { }
  
  onpageSearch(value) {
    this.router.navigateByUrl('/search/' + value.onpageSearchInput);
  }

  ngOnInit(): void { }

}
