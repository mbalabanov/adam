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

  rawData: any = {};

  artifactImage: any = {};
  personImage: any = {};
  eventImage: any = {};

  constructor(private apirequestsService: ApirequestsService, private router: Router) { }
  
  onpageSearch(value) {
    this.router.navigateByUrl('/search/' + value.onpageSearchInput);
  }

  ngOnInit(): void {

    this.apirequestsService.getData().subscribe(data => {
      this.rawData = data;
      this.artifactImage = this.rawData.artifacts.coverimage;
      this.personImage = this.rawData.persons.coverimage;
      this.eventImage = this.rawData.events.coverimage;
    });

  }

}
