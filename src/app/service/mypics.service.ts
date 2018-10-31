import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class MypicsService {

  constructor(private http: HttpClient) { }
  getPics(){
    return this.http.get<any[]>("https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS TOKEN&images")
            ;
  }
}
