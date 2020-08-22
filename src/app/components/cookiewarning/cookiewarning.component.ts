import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookiewarning',
  templateUrl: './cookiewarning.component.html',
  styleUrls: ['./cookiewarning.component.css']
})
export class CookiewarningComponent implements OnInit {

  constructor(private cookieService: CookieService) {}

  public cookieValue: string;

  acceptCookies() {
    this.cookieService.set('cookie-policy', 'accepted');
    this.cookieValue = this.cookieService.get('cookie-policy');
  }

  ngOnInit(): void {
  }

}
