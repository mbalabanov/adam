import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-searchresultspage',
  templateUrl: './searchresultspage.component.html',
  styleUrls: ['./searchresultspage.component.css']
})
export class SearchresultspageComponent implements OnInit {

  isBrowser: boolean;

  constructor( @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
