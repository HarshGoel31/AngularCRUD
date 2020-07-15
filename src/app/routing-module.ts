import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { AdminregComponent } from './adminreg/adminreg.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
// import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import {SuccessComponent} from './success/success.component';
import {FailComponent} from './fail/fail.component';
import {AdminComponent} from './admin/admin.component';
const routes: Routes = [
   // {
   //    path: '',
   //    redirectTo: "/home",
   //    pathMatch:'full'
   // },
   { path: "home", component: HomeComponent },
   { path: "contactus", component: ContactusComponent },
   { path: "login", component: LoginComponent },
   { path: "register", component: RegisterComponent },
   {path:"app",component:AppComponent},
   { path: "logout", component: LogoutComponent },
   {path:"admin",component:AdminComponent},
   { path: "adminreg", component: AdminregComponent },
   {path:"success",component:SuccessComponent},
   {path:"fail",component:FailComponent}
//    {path:'**',component:PagenotfoundComponent}
];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ HomeComponent,ContactusComponent,AdminregComponent,RegisterComponent,AdminComponent,LoginComponent,LogoutComponent,SuccessComponent,FailComponent];
// , ContactusComponent, LoginComponent