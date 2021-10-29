import { UserListComponent } from './pages/private-component/user-list/user-list.component';
import { LoginPageComponent } from './pages/public-component/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponentComponent } from './pages/private-component/private-component.component';
import { PublicComponentComponent } from './pages/public-component/public-component.component';

const routes: Routes = [
  //{path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '',
    component: PrivateComponentComponent,
    children: [
      {
        path: 'login',
        data: { title: 'Login' },
        component: LoginPageComponent
      },
      {
        path: '',
        data: { title: 'Login' },
        component: LoginPageComponent
      },
    ]
  },
  {
    path: '',
    component: PublicComponentComponent,
    children: [
      {
        path: 'users',
        data: { title: 'Users' },
        component: UserListComponent
      },
      {
        path: '',
        data: { title: 'Users' },
        component: UserListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
