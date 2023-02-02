import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthData,
  registerData,
} from '../component/interface/auth-login.model';
@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/register';
  }
  createUser(email: string, password: any) {
    console.log(email, 'email');

    const authData: AuthData = { email: email, password: password };
    console.log(authData, 'authDataauthData');

    return this.http.post(this.serviceURL, authData);
  }
  registerUser(data: registerData) {
     this.http.post<registerData>(this.serviceURL, data).subscribe()
    console.log(data, 'dataform service');
  }
}
