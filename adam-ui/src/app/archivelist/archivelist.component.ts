import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { archiveCategories } from '../archivedata';

@Component({
  selector: 'app-list',
  templateUrl: './archivelist.component.html',
  styleUrls: ['./archivelist.component.css']
})
export class ArchivelistComponent implements OnInit {

  archiveCategories = archiveCategories;

  ngOnInit(): void {
  }

}
