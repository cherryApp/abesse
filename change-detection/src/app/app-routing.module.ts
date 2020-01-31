import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { OnchangesComponent } from './page/onchanges/onchanges.component';
import { OninitComponent } from './page/oninit/oninit.component';
import { DocheckComponent } from './page/docheck/docheck.component';
import { AftercontentComponent } from './page/aftercontent/aftercontent.component';
import { AfterviewComponent } from './page/afterview/afterview.component';
import { OndestroyComponent } from './page/ondestroy/ondestroy.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'onchanges',
    component: OnchangesComponent
  },
  {
    path: 'oninit',
    component: OninitComponent
  },
  {
    path: 'docheck',
    component: DocheckComponent
  },
  {
    path: 'aftercontent',
    component: AftercontentComponent
  },
  {
    path: 'afterview',
    component: AfterviewComponent
  },
  {
    path: 'ondestroy',
    component: OndestroyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
