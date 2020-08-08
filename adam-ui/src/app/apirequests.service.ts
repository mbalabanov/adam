import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApirequestsService {

  private archiveUrl: string = 'https://adam-interface.herokuapp.com/all';
  private newsUrl: string = 'https://adam-interface.herokuapp.com/news';
  private featuredUrl: string = 'https://adam-interface.herokuapp.com/featured';
  private complianceUrl: string = 'https://adam-interface.herokuapp.com/compliance';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.archiveUrl);
  }

  getNews() {
    return this.http.get(this.newsUrl);
  }

  getFeatured() {
    return this.http.get(this.featuredUrl);
  }

  getCompliance() {
    return this.http.get(this.featuredUrl);
  }
  
}
