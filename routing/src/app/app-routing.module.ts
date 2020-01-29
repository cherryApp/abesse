import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { UsersComponent } from './page/users/users.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
import { RoleGuardService as RoleGuard } from './service/role-guard.service';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      expectedRole: 3
    }
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
