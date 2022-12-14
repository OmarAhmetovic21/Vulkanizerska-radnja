import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_SERVER = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getToken(data: any): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.post(this.API_SERVER + 'config/login.php', data, {headers: headers});
  }
}
