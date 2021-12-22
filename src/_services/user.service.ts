import { User } from '../app/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

interface Obj { [key: string]: any; }

type queryParams = Obj;
type bodyParams = Obj;
type response = Obj;

@Injectable({providedIn: 'root'})

export class UserService {

  private url = "api/v1/";
  baseUrl = environment.apiURL;
  constructor(private httpClient: HttpService) { }

  getUsersList(): Promise<any> {
    return this.httpClient.get(this.url + 'users',{});
  }

  removeUser(id: any): Promise<any> {
    return this.httpClient.delete(this.url + 'delete', id);
  }

  updateUser(user: Object) {
    return this.httpClient.post(this.url + 'update', user);
  }

  insertUser(user: Object) {
    return this.httpClient.post(this.url + 'insert', user);
  }
}
