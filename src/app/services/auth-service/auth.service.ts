import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string {
    return sessionStorage.getItem("jwt");
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    //return tokenNotExpired(null, token);
    return  token ? true : false;
  }
}
