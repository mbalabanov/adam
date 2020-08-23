import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-userprofilepage',
  templateUrl: './userprofilepage.component.html',
  styleUrls: ['./userprofilepage.component.css']
})
export class UserprofilepageComponent implements OnInit {

  isBrowser: boolean;

  constructor( @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

}
