import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { archiveCategories } from '../archivedata';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-archivedetail',
  templateUrl: './archivedetail.component.html',
  styleUrls: ['./archivedetail.component.css']
})
export class ArchivedetailComponent implements OnInit {

	archiveCategories = archiveCategories;
	archiveCategory;
	searchText;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
    function getCategoryIndex(arg) {
                for(var i = 0; i < archiveCategories.length; i += 1) {
                    if(archiveCategories[i].name.toLowerCase() === arg) {
                        return i;
                    }
                }
            }

      this.route.paramMap.subscribe(params => {
          let slug = params.get('categoryId');
          let theIndex = getCategoryIndex(slug);
          this.archiveCategory = archiveCategories[theIndex];
      });
	}

}
