import { Component, OnInit } from '@angular/core';
import { ApirequestsService } from '../apirequests.service';

@Component({
  selector: 'app-list',
  templateUrl: './archivelist.component.html',
  styleUrls: ['./archivelist.component.css']
})
export class ArchivelistComponent implements OnInit {

  public archiveCategories;

  constructor(private _apirequestsService: ApirequestsService) { }
  
  ngOnInit(): void {

    this._apirequestsService.getData()
        .subscribe(data => {
        this.archiveCategories = Object.values(data);
    });

  }

}
