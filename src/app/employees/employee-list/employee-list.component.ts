import {Component, OnInit, Output} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  onNewEmployee() {
    this.router.navigate(['employees', 'new']);
  }
}
