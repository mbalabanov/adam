import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Archive of Digital Art & Media';

  onActivate(event) {
    window.scroll(0,0);
  }

}
