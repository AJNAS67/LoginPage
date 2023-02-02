import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../component/interface/auth-login.model';
@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000';
  }
  createUser(email: string, password: string) {
    console.log(email,'email');
    
    const authData: AuthData = { email: email, password: password };
    console.log(authData,'authDataauthData');


    return this.http.post(this.serviceURL, authData);
  }
}
   