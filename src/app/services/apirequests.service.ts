import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  private newsItemUrl: string = 'https://adam-interface.herokuapp.com/newsitem';
  private featuredUrl: string = 'https://adam-interface.herokuapp.com/featured';
  private complianceUrl: string = 'https://adam-interface.herokuapp.com/compliance';
  private generalApiUrl: string = 'https://adam-interface.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.archiveUrl);
  }

  getArtifacts(): Observable<any> {
    return this.http.get<any>(this.artifactsUrl);
  }

  getPersons(): Observable<any> {
    return this.http.get<any>(this.personsUrl);
  }

  getEvents(): Observable<any> {
    return this.http.get<any>(this.eventsUrl);
  }

  getArtifact(id): Observable<any> {
    let tempUrl = this.artifactsUrl + '/' + id;
    return this.http.get<any>(tempUrl);
  }

  getPerson(id): Observable<any> {
    let tempUrl = this.personsUrl + '/' + id;
    return this.http.get<any>(tempUrl);
  }

  getEvent(id): Observable<any> {
    let tempUrl = this.eventsUrl + '/' + id;
    return this.http.get<any>(tempUrl);
  }

  getNews(): Observable<any> {
    return this.http.get<any>(this.newsUrl);
  }

  getNewsItem(id): Observable<any> {
    return this.http.get<any>(this.newsItemUrl + '/' + id);
  }

  getFeatured(): Observable<any> {
    return this.http.get<any>(this.featuredUrl);
  }

  getCompliance(): Observable<any> {
    return this.http.get<any>(this.complianceUrl);
  }
  
  getCompliancePage(id): Observable<any> {
    return this.http.get<any>(this.complianceUrl + '/' + id);
  }
 
  deleteItem(dataType, id): Observable<any> {
    console.log('From API Request Service');
    console.log(dataType, id);
    var tempUrl = this.generalApiUrl + dataType + '/' + id;
    console.log(tempUrl);
    return this.http.delete<any>(tempUrl);
  }

}
