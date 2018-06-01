import { ROUTER_PROVIDERS } from "@angular/router/src/router_module";
import { RouterModule, Routes, ROUTES } from "@angular/router";
import { Http, Response } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordlessAuthComponent } from './passwordless-auth/passwordless-auth.component';
const firebaseConfig = {    
    apiKey: "AIzaSyCBbWMNu7hgNvZ5mSAaJzs6eJph0xGlUZM",
    authDomain: "email-946b7.firebaseapp.com",
    databaseURL: "https://email-946b7.firebaseio.com",
    projectId: "email-946b7",
    storageBucket: "email-946b7.appspot.com"
    
  
}
@NgModule({
  declarations: [
    AppComponent,
    PasswordlessAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
