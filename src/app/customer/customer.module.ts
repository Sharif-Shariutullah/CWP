import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterailModule } from '../DemoAngularMaterailModule';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoAngularMaterailModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 

  ]
})
export class CustomerModule { }
