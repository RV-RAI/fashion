import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from '../Models/apiResponse.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  creatContact(cform): Observable<apiResponse> {
    return this.http.post<apiResponse>("https://dev.zedtechnosolutions.com/web_service_zedtechs/ohh_contact", cform);
  }
  creatSubscribe(cform): Observable<apiResponse> {
    return this.http.post<apiResponse>("https://dev.zedtechnosolutions.com/web_service_zedtechs/ohh_subscription", cform);
  }

  findTalent(cform): Observable<apiResponse> {
    return this.http.post<apiResponse>("https://dev.zedtechnosolutions.com/web_service_zedtechs/ohh_talent", cform);
  }

  joinUs(cform): Observable<apiResponse> {
    return this.http.post<apiResponse>("https://dev.zedtechnosolutions.com/web_service_zedtechs/ohh_join", cform);
  }

}
