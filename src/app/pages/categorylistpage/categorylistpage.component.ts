import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-categorylistpage',
  templateUrl: './categorylistpage.component.html',
  styleUrls: ['./categorylistpage.component.css']
})
export class CategorylistpageComponent implements OnInit {

  isBrowser: boolean;

  constructor( @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

}
