import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import {ConnectService} from '../services/connect.service'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  firstName!: String;
  lastName!:String
  email!: String;
  college!: String;
  address!: String;
  analyticsKnowledge!: number;
  passingYear!: number;
  stream !: String;
  gender !: String;
  countryCode!: String;
  phoneNumber!: number;
  password!: String;
  passwordCheck !: String;

  constructor(private connectServices: ConnectService, private authServices: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.firstName || !this.lastName || !this.email || !this.address || !this.gender || !this.gender || !this.password || !this.passwordCheck){
      alert('Please proper information')
      return;
    }
    if (this.password !== this.passwordCheck){
      alert('Password dosent Match')
      this.password = ''
      this.passwordCheck = ''
      return;
    }

    const newUser: User = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      college: this.college,
      address: this.address,
      analyticsKnowledge: this.analyticsKnowledge,
      passingYear: this.passingYear,
      stream : this.stream,
      gender : this.gender,
      countryCode: this.countryCode,
      phoneNumber: this.phoneNumber,
      password: this.password,
    }

    console.log(newUser)

    this.connectServices.registerUser(newUser).subscribe((userDetail) => this.authServices.setSession(userDetail))

  }

}
