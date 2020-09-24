import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UploadService {
  
  private uploadUrl='https://api.imgur.com/3/image';

  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Client-ID 140feecbcf54501'})
  };

  constructor(private http: HttpClient){}

  uploaddata(image: string): Promise<any>{
    return this.http.post(this.uploadUrl, {image}, this.httpOptions)
                    .toPromise()
                    .then(this.extractData);
  }

  private extractData(res: Response) {
    let responseData = res;
    return responseData;
  }

}