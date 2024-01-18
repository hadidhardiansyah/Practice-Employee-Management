import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import {AppRoutingModule} from "./app-routing.module";
import { EmployeeComponent } from './employees/employee-list/employee/employee.component';
import {EmployeeService} from "./employees/employee.service";
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
