import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  alldata: any = [];
  constructor(private _router: Router, private _http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    this._http.get('http://localhost:3000/user/getallusers').subscribe(data => {
      return this._router.navigate(['/products']);
    });

  }
}

