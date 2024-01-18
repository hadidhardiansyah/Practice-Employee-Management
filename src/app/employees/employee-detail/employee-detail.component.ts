import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  employees: Employee[];
  id: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.employee = this.employeeService.getEmployee(this.id);
        }
      )
  }

}
