import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './page/base/base.component';
import { CrossFieldComponent } from './page/cross-field/cross-field.component';
import { AsyncComponent } from './page/async/async.component';
import { BuiltInComponent } from './page/built-in/built-in.component';
import { HomeComponent } from './page/home/home.component';
import { NavComponent } from './common/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CrossFieldComponent,
    AsyncComponent,
    BuiltInComponent,
    HomeComponent,
    NavComponent,
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
