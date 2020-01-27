import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BaseComponent } from './page/base/base.component';
import { AsyncComponent } from './page/async/async.component';
import { CrossFieldComponent } from './page/cross-field/cross-field.component';
import { BuiltInComponent } from './page/built-in/built-in.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'base',
    component: BaseComponent
  },
  {
    path: 'async',
    component: AsyncComponent
  },
  {
    path: 'cross-field',
    component: CrossFieldComponent
  },
  {
    path: 'built-in',
    component: BuiltInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
