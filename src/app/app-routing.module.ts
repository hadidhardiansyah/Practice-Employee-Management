import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {EmployeesComponent} from "./employees/employees.component";
import {EmployeeEditComponent} from "./employees/employee-edit/employee-edit.component";
import {EmployeeDetailComponent} from "./employees/employee-detail/employee-detail.component";
import {EmployeeListComponent} from "./employees/employee-list/employee-list.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent, children: [
      {path: 'list', component: EmployeeListComponent},
      {path: 'new', component: EmployeeEditComponent},
      {path: 'list/:id', component: EmployeeDetailComponent},
      {path: ':id/edit', component: EmployeeEditComponent}
    ]}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
