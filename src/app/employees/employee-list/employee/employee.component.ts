import {Component, Input} from '@angular/core';
import {Employee} from "../../employee.model";
import {EmployeeService} from "../../employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input() employee: Employee;
  @Input() index: number;

  constructor(
    private employeeService: EmployeeService
  ) {}

  onDeleteEmployee() {
    this.employeeService.deleteEmployee(this.index);
  }


}
