import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-newslistpage',
  templateUrl: './newslistpage.component.html',
  styleUrls: ['./newslistpage.component.css']
})
export class NewslistpageComponent implements OnInit {

  isBrowser: boolean;

  constructor( @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
