import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UserLoginService } from 'src/app/service/user-login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  constructor(private loginService: UserLoginService, private router: Router) {}
  exform!: FormGroup;

  ngOnInit() {
    this.exform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  clicksub() {
    console.log(this.exform.value, 'reee');
    let email = this.exform.value.email;
    let password = this.exform.value.password;
    this.loginService
      .loginUser({ email: `${email}`, password: `${password}` })
      .subscribe((res) => {
        if (res.status) {
          Swal.fire('Hi', `${res.message}`, 'success');

          this.router.navigate(['/']);
        } else {
          Swal.fire('Hi', `${res.message}`, 'error');
        }
        console.log(res);
      });

    // this.loginService.loginUser(this.exform.value);
    this.exform.reset();
  }

  get email() {
    return this.exform.get('email');
  }

  get password() {
    return this.exform.get('password');
  }
}
