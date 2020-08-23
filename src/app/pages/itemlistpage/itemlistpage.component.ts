import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-itemlistpage',
  templateUrl: './itemlistpage.component.html',
  styleUrls: ['./itemlistpage.component.css']
})
export class ItemlistpageComponent implements OnInit {

  isBrowser: boolean;

  constructor( @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

}
