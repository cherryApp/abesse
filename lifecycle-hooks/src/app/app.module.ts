import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnchangesComponent } from './page/onchanges/onchanges.component';
import { OninitComponent } from './page/oninit/oninit.component';
import { DocheckComponent } from './page/docheck/docheck.component';
import { AftercontentComponent } from './page/aftercontent/aftercontent.component';
import { AfterviewComponent } from './page/afterview/afterview.component';
import { OndestroyComponent } from './page/ondestroy/ondestroy.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OnchangesComponent,
    OninitComponent,
    DocheckComponent,
    AftercontentComponent,
    AfterviewComponent,
    OndestroyComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
