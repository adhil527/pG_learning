import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { HttpClientService } from '../common/http-client.service';
import { throwError, concat, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api: string = environment.apiUrl;

  constructor(private router: Router,
    // private httpa: Http,
    private http: HttpClient,
    private https: HttpClientService
  ) { }
  login(obj) {
    return this.https.post('/api/authapp/login', obj)
      .map(res => res.json())
      .catch(this.https.hamdleError);
  }
}
