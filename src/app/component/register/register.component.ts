import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserLoginService } from 'src/app/service/user-login.service';
import { registerData } from '../interface/auth-login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private aj:boolean=false;
  registerFrom = this.fb.group({
    username: [''],
    email: [],
    password: [],
  });
  constructor(private fb: FormBuilder,private registerService:UserLoginService) {}
  onSubmit() {
    let username=this.registerFrom?.value.username
    console.log(username,'username');
    
    let email=this.registerFrom.value?.email

    let password=this.registerFrom.value?.password

    
    this.registerService.registerUser({username:`${username}` , email: `${email}`, password: `${password}`})
    console.log(this.registerFrom.value, 'register');
  }
}
