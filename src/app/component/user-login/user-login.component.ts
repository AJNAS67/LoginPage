import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserLoginService } from 'src/app/service/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  // SignupForm:FormGroup;
  signInForm = this.fb.group({
    email: ['aj@gmail.com'],
    password: [''],
  });
  constructor(private fb: FormBuilder,public userLoginService:UserLoginService) {}
  onSubmit() {
    console.log('hii');
    console.log(this.signInForm.value);
    const userDetails=this.signInForm.value
    this.userLoginService.createUser('ajnaskp67@gmail.com','ajnas@123')
    
  }
}
