import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Archive of Digital Art & Media';

  constructor(private cookieService: CookieService) {}

  public ngOnInit(): void {
  }

}
