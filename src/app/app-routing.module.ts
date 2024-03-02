import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './basic/login/login.component';
import { SignupComponent } from './basic/signup/signup.component';
import { HomeComponent } from './basic/home/home.component';

const routes: Routes = [

{ path: "login", component: LoginComponent},
{ path: "signup", component: SignupComponent},
{ path: "homePage", component: HomeComponent},



{ path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) }, 
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
