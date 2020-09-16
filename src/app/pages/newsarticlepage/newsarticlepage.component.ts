import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-newsarticlepage',
  templateUrl: './newsarticlepage.component.html',
  styleUrls: ['./newsarticlepage.component.css']
})
export class NewsarticlepageComponent implements OnInit {

  isBrowser: boolean;

  constructor( @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
