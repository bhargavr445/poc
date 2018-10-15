import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserAnimationsModule,
   // CommonModule,
     BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
   // BrowserAnimationsModule,
    NgbModule.forRoot(),

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
