import {Employee} from "./employee.model";
import {EventEmitter} from "@angular/core";

export class EmployeeService {
  employeesChanged = new EventEmitter<Employee[]>();


  employees: Employee[] = [
    new Employee(
      'mike',
      'Mike',
      'Nichol',
      'mikenichol@gmail.com',
      new Date(1998, 5,23),
      5000000,
      'contract',
      'Application Development'
      , new Date(2023, 6,13)
    ),
    new Employee(
      'tom',
      'Tom',
      'Mono',
      'tommono@gmail.com',
      new Date(1999, 1,12),
      7000000,
      'contract',
      'Application Support'
      , new Date(2024, 1,12)
    ),
  ]

  getEmployees() {
    return this.employees.slice();
  }

  getEmployee(index: number) {
    return this.employees[index];
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeesChanged.emit(this.employees.slice());
  }

  deleteEmployee(index: number) {
    this.employees.splice(index,1);
    console.log(this.employees)
  }

  updateEmployee(index: number, employeeInfo: Employee) {
    const employee = this.employees.find(
      (e) => {
        return e[index];
      }
    );
    if (employee) {
      employee.username = employeeInfo.username;
      employee.firstName = employeeInfo.firstName;
      employee.lastName = employeeInfo.lastName;
      employee.email = employeeInfo.email;
      employee.birthDate = employeeInfo.birthDate;
      employee.basicSalary = employeeInfo.basicSalary;
      employee.status = employeeInfo.status;
      employee.group = employeeInfo.group;
      employee.description = employeeInfo.description;
    }
    return employee;
  }
}
