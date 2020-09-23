import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  catSlug: string = '';

  archiveCategory: any  = [];
  searchText;

  public filter: string = '';
  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 4,
      currentPage: 1
  };

  private popped = [];

  pushItem() {
      let item = this.popped.pop() || 'new';
      this.archiveCategory.push(item);
  }

  popItem() {
      this.popped.push(this.archiveCategory.pop());
  }

constructor(private apirequestsService: ApirequestsService, private route: ActivatedRoute, public auth: AuthService ) { }

ngOnInit(): void {

      this.route.paramMap.subscribe(params => {
          this.catSlug = params.get('categoryId');

          switch (this.catSlug) {
              case 'events': {
                this.apirequestsService.getEvents()
                .subscribe(data => {
                    this.archiveCategory = data;
                    });
                    break;
                }
              case 'persons': {
                this.apirequestsService.getPersons()
                .subscribe(data => {
                    this.archiveCategory = data;
                    });
                    break;
                }
              case 'artifacts': {
                this.apirequestsService.getArtifacts()
                .subscribe(data => {
                    this.archiveCategory = data;
                    });
                    break;
                }
          }

      });

  }

}