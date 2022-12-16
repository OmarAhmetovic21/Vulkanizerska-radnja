import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private API_SERVER = environment.apiUrl;
  constructor(private httpClient: HttpClient) { 

  }

  public getArticles(): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.get(this.API_SERVER + 'config/getArticles.php',{headers: headers});
  }

  public postArticle(data: any): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.post(this.API_SERVER + 'config/postArticles.php', data, {headers: headers});
  }

  public deleteArticle(name: any): Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');  
    return this.httpClient.post(this.API_SERVER + 'config/deleteArticles.php', name, {headers: headers});
  }
}
