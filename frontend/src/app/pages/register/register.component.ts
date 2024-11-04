import { Component } from '@angular/core';
import {RegistrationRequest} from '../../services/models/registration-request';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {AuthenticationResponse} from '../../services/models/authentication-response';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = {email: ' ', firstname: '', lastname: '', password: ''};
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    //private tokenService: TokenService
  ) {

  }

  register() {
    this.errorMessage = [];
    this.authService.register({
      body: this.registerRequest,
    }).subscribe({
      next: ():void => {
        this.router.navigate(['activate-account']);
      },
      error: (err):void => {
        this.errorMessage = err.error.validationErrors;
      }
    })
  }

  login() {
    this.router.navigate(['login']);
  }
}
