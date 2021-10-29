import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error = null;
  submitted = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    //this.loaded = false;
    // Para o caso formulario invalido
    //if (this.loginForm.invalid) {
    //  return;
    //}
    try {
      //await this.authenticationService.login(this.loginForm.getRawValue());
      this.router.navigate(['/users']);
    } catch (error) {

      //this.error = error;
      //setTimeout(() => toastError.fire('Falha de autenticação!'), 2000);
      //setTimeout(() => toastError.close(), 5000);
    } finally {
      //setTimeout(() => this.loaded = true, 1000);
    }
  }

}
