import { Component } from '@angular/core';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMessage: Array<string> = [];

  login() {

  }

  register() {

  }
}
