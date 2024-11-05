import { Component } from '@angular/core';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../../services/services/authentication.service';
import {Router} from '@angular/router';
import {AuthenticationResponse} from '../../services/models/authentication-response';
import {NgForOf, NgIf} from '@angular/common';
import {TokenService} from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {email: '', password: ''};
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    //another serv
  ) {}

  login() {
    this.errorMessage = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res:AuthenticationResponse):void => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['books']);
      },
      error: (err): void => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMessage = err.error.validationErrors;
        } else {
          this.errorMessage.push(err.error.error);
        }
      }
    })
  }

  register() {
    this.router.navigate(['register']);
  }
}
