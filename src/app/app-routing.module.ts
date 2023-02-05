import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserLoginComponent } from './component/user-login/user-login.component';

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin-login', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
