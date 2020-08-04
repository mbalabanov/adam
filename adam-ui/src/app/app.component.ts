import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Archive of Digital Art & Media';
  url = 'https://adam-interface.herokuapp.com/all';
  allDataReveived;

  constructor(private http: HttpClient) {

    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      this.allDataReveived = data;
    });

  }

}
