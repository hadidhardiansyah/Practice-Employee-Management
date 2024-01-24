import {Component, Input} from '@angular/core';
import {Employee} from "../../employee.model";
import {EmployeeService} from "../../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input() employee: Employee;
  @Input() index: number;
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: Date;
  changesSaved = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onDeleteEmployee() {
    this.employeeService.deleteEmployee(this.index);
  }

  onUpdateEmployee() {
    this.employeeService.updateEmployee(this.id, {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      birthDate: this.birthDate,
      basicSalary: this.basicSalary,
      status: this.status,
      group: this.group,
      description: this.description

    });
    this.changesSaved = true;
    this.router.navigate(['../id/edit'], {relativeTo: this.route});
  }


}
