import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class MypicsService {

  constructor(private http: HttpClient) { }
  getPics(){
    return this.http.get<any[]>("https://api.instagram.com/v1/users/self/media/recent/?access_token=1931467751.82ff070.4381b05b4f6847928701ae23bd6d7ce5&images")
            ;
  }
}
