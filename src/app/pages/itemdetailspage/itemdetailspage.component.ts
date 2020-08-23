import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-itemdetailspage',
    templateUrl: './itemdetailspage.component.html',
    styleUrls: ['./itemdetailspage.component.css']
})

export class ItemdetailspageComponent implements OnInit {

    isBrowser: boolean;

    constructor( @Inject(PLATFORM_ID) platformId) {
      this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit(): void {
    }
  
}