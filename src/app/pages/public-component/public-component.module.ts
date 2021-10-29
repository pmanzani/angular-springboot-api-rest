import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ToolbarComponent } from 'src/app/toolbar/toolbar.component';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ToolbarComponent
  ]
})
export class PublicComponentModule { }
