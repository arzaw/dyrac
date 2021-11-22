import { Component, OnInit } from '@angular/core';
import { convertCompilerOptionsFromJson } from 'typescript';
import {ConnectService} from '../services/connect.service'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email !: String;
  password !: String;

  constructor(private connectServices: ConnectService, private authServices: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const loginUser ={
      email:this.email,
      password:this.password
    }

    this.connectServices.loginUser(loginUser).subscribe((userData) => this.authServices.setSession(userData))
  }

}
