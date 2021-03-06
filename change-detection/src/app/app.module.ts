import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnchangesComponent } from './page/onchanges/onchanges.component';
import { OninitComponent } from './page/oninit/oninit.component';
import { DocheckComponent } from './page/docheck/docheck.component';
import { AftercontentComponent } from './page/aftercontent/aftercontent.component';
import { AfterviewComponent, AfterViewComponent, ChildViewComponent } from './page/afterview/afterview.component';
import { OndestroyComponent } from './page/ondestroy/ondestroy.component';
import { NavComponent } from './common/nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { ChangeChildComponent } from './common/change-child/change-child.component';
import { DocheckChildComponent } from './common/docheck-child/docheck-child.component';
import { AfterContentChildComponent } from './common/after-content-child/after-content-child.component';

@NgModule({
  declarations: [
    AppComponent,
    OnchangesComponent,
    OninitComponent,
    DocheckComponent,
    AftercontentComponent,
    AfterviewComponent,
    AfterViewComponent,
    ChildViewComponent,
    OndestroyComponent,
    NavComponent,
    HomeComponent,
    ChangeChildComponent,
    DocheckChildComponent,
    AfterContentChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
