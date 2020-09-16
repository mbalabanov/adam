import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApirequestsService {

  private baseURL = 'http://localhost:5003/'; // Change to https://adam-interface.herokuapp.com/ http://localhost:5003/ for locally running API server
  private archiveUrl: string = this.baseURL + 'all';
  private artifactsUrl: string = this.baseURL + 'artifacts';
  private personsUrl: string = this.baseURL + 'persons';
  private eventsUrl: string = this.baseURL + 'events';
  private newsUrl: string = this.baseURL + 'news';
  private newsItemUrl: string = this.baseURL + 'newsitem';
  private featuredUrl: string = this.baseURL + 'featured';
  private complianceUrl: string = this.baseURL + 'compliance';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    console.log('Response kommt zumindest mal an');
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
    var tempURL = this.baseURL + dataType + '/' + id;
    return this.http.delete<any>(tempURL);
  }

  putFeaturedItem(featuredData): Observable<any> {
    return this.http.put<any>(this.featuredUrl, featuredData, this.httpOptions);
  };

  putCompliancePages(complianceData): Observable<any> {
    return this.http.put<any>(this.complianceUrl, complianceData, this.httpOptions);
  };

  putNewsArticles(newsData): Observable<any> {
    return this.http.put<any>(this.newsUrl, newsData, this.httpOptions);
  };

  postArchiveItem(itemData, category): Observable<any> {
    console.log("category")
    console.log("===================")
    console.log("itemData")
    console.log("===================")

    let tempAchiveUrl = this.baseURL + category;
    return this.http.post<any>(tempAchiveUrl, itemData, this.httpOptions);
  };

  putArchiveItem(itemData, category, id): Observable<any> {
    let tempEditAchiveUrl = this.baseURL + category + '/' + id;
    return this.http.put<any>(tempEditAchiveUrl, itemData, this.httpOptions);
  };

}
