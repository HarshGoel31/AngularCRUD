import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule, RoutingComponent} from './routing-module';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {AdminregComponent} from './adminreg/adminreg.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

// import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    // RoutingComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    AdminComponent,
    AdminregComponent,
    // PagenotfoundComponent,

    // SuccessComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
