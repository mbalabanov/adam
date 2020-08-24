import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApirequestsService {

  private baseURL = 'https://adam-interface.herokuapp.com/';
  private archiveUrl: string = this.baseURL + 'all';
  private artifactsUrl: string = this.baseURL + 'artifacts';
  private personsUrl: string = this.baseURL + 'persons';
  private eventsUrl: string = this.baseURL + 'events';
  private newsUrl: string = this.baseURL + 'news';
  private newsItemUrl: string = this.baseURL + 'newsitem';
  private featuredUrl: string = this.baseURL + 'featured';
  private complianceUrl: string = this.baseURL + 'compliance';

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
 
  deleteItem(dataType, id) {
    var tempURL = this.baseURL + dataType + '/' + id;
    return this.http.delete(tempURL);
  }

}
