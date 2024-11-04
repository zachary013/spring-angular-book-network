import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {NgIf} from '@angular/common';
import {CodeInputModule} from 'angular-code-input';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    NgIf,
    CodeInputModule
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {

  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  onCodeCompleted(token: string) {
    
  }
}
