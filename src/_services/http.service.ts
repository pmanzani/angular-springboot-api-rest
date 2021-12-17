import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Obj { [key: string]: any; }

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  header: HttpHeaders = new HttpHeaders({ authorization: 'token' });
  baseUrl = environment.apiURL;

  constructor(public nativeHttp: HttpClient) { }

  private async request<T = Object>(url: string, body: any): Promise<T> {
    return this.nativeHttp.post<T>(this.baseUrl + url, body).toPromise();
  }

  get<T = Object>(url: string, params: Object): Promise<Object> {
    return this.nativeHttp.get<T>(this.baseUrl + url, params).toPromise();
  }

  post<T = Object>(url: string, params: Object): Promise<Object> {
    return this.nativeHttp.post<T>(this.baseUrl + url, params).toPromise();
  }

  delete<T = Object>(url: string, body: Object): Promise<Object> {
    return this.nativeHttp.post<T>(this.baseUrl + url, body).toPromise();
  }

}
