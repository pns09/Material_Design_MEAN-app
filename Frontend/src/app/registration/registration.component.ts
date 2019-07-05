import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../shared/register.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _router: Router,
    private _http: HttpClient) { }

  registeredUser: Register = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  };

  ngOnInit() {
  }
  submit(form: NgForm) {
    this._http.post('http://localhost:3000/user/new_user', form.value).subscribe(function () {
      console.log('Successfully Registered!!');
    }, function errorCallback() {
      console.log('Failed at client side!!');
    });
    this._router.navigate(['/login']);
  }
}
