import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {NgIf} from '@angular/common';
import {CodeInputModule} from 'angular-code-input';

// @ts-ignore
@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    NgIf,
    CodeInputModule
  ],
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
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
    this.confirmAccount(token);
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next: (): void => {
        this.message = 'Your account has been activated.\nNow you can proceed to login';
        this.submitted = true;
        this.isOkay = true;
      },
      error: (): void => {
        this.message = 'Token has been expired';
        this.submitted = true;
        this.isOkay = false;
      }
    })
  }
}
