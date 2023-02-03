import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserLoginService } from 'src/app/service/user-login.service';
import { registerData } from '../interface/auth-login.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  private aj: boolean = false;
  registerFrom = this.fb.group({
    username: [''],
    email: [],
    password: [],
  });
  constructor(
    private fb: FormBuilder,
    private registerService: UserLoginService,
    private router: Router
  ) {}
  onSubmit() {
    let username = this.registerFrom?.value.username;
    console.log(username, 'username');

    let email = this.registerFrom.value?.email;

    let password = this.registerFrom.value?.password;

    this.registerService
      .registerUser({
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
      })
      .subscribe((res) => {
        console.log(res, 'responce');
        console.log(res?.message);
        if (res.isAdded) {
          Swal.fire('Hi', `${res.message}`, 'success');
          this.router.navigate(['/login']);
        } else {
          Swal.fire('Hi', `${res.message}`, 'error');
        }
        // alert(res.message);
      });
    console.log(this.registerFrom.value, 'register');
  }
}
