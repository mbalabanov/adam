import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { archiveCategories } from '../photoinfos';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  archiveCategories = archiveCategories;

  ngOnInit(): void {
  }

}
