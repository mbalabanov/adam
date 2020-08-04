import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { archiveCategories } from '../archivedata';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

	archiveCategories = archiveCategories;
	archiveCategory;
	urlCategory;
	archiveItem;

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
          let catSlug = params.get('categoryId');
          let itemSlug = params.get('itemId');
          let catIndex = getCategoryIndex(catSlug);
          let categoryName = (archiveCategories[catIndex].name).toLowerCase();
          this.archiveCategory = archiveCategories[catIndex];
          this.archiveItem = archiveCategories[catIndex].content[itemSlug];
          this.urlCategory = categoryName;
      });
	}

}
