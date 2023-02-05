import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { ShowUsersComponent } from './component/admin/show-users/show-users.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';

@NgModule({
  declarations: [AppComponent, UserLoginComponent, RegisterComponent, HeaderComponent, HomeComponent, AdminHomeComponent,ShowUsersComponent, AdminLoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
