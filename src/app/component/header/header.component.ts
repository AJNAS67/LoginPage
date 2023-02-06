import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get('http://localhost:4200/api/user', { withCredentials: true })
      .subscribe(
        (res) => {
          console.log(res, 'tokenmias');
        },
        (err) => {
          console.log(err, 'errrr');
        }
      );
    console.log(localStorage.getItem('token'), 'ajjajaaj');
  }
  logout() {
    localStorage.removeItem('token');
  }
  AdminLogout() {
    localStorage.removeItem('adminToken');
  }
}
