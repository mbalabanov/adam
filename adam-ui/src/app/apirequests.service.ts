import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApirequestsService {

  private archiveUrl: string = 'https://adam-interface.herokuapp.com/all';
  private artifactsUrl: string = 'https://adam-interface.herokuapp.com/artifacts';
  private personsUrl: string = 'https://adam-interface.herokuapp.com/persons';
  private eventsUrl: string = 'https://adam-interface.herokuapp.com/events';
  private newsUrl: string = 'https://adam-interface.herokuapp.com/news';
  private featuredUrl: string = 'https://adam-interface.herokuapp.com/featured';
  private complianceUrl: string = 'https://adam-interface.herokuapp.com/compliance';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.archiveUrl);
  }

  getArtifacts() {
    return this.http.get(this.artifactsUrl);
  }

  getPersons() {
    return this.http.get(this.personsUrl);
  }

  getEvents() {
    return this.http.get(this.eventsUrl);
  }

  getArtifact(id) {
    let tempUrl = this.artifactsUrl + '/' + id;
    return this.http.get(tempUrl);
  }

  getPerson(id) {
    let tempUrl = this.personsUrl + '/' + id;
    return this.http.get(tempUrl);
  }

  getEvent(id) {
    let tempUrl = this.eventsUrl + '/' + id;
    return this.http.get(tempUrl);
  }

  getNews() {
    return this.http.get(this.newsUrl);
  }

  getFeatured() {
    return this.http.get(this.featuredUrl);
  }

  getCompliance() {
    return this.http.get(this.complianceUrl);
  }
  
}
