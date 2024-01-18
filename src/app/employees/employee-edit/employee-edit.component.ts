import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee.model";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {
  id: number;
  editMode = false;

  @ViewChild('usernameInput') usernameInputRef: ElementRef;
  @ViewChild('firstNameInput') firstNameInputRe: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('email') emailRef: ElementRef;
  @ViewChild('birthDate') birthDateRef: ElementRef;
  @ViewChild('basicSalary') basicSalaryRef: ElementRef;
  @ViewChild('status') statusRef: ElementRef;
  @ViewChild('group') groupRef: ElementRef;
  @ViewChild('description') descriptionRef: ElementRef;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );
  }

  onAddEmployee() {
    const empUserName = this.usernameInputRef.nativeElement.value;
    const empFirstName = this.firstNameInputRe.nativeElement.value;
    const empLastName = this.lastNameInputRef.nativeElement.value;
    const empEmail = this.emailRef.nativeElement.value;
    const empBirthDate = this.birthDateRef.nativeElement.value;
    const empBasicSalary = this.basicSalaryRef.nativeElement.value;
    const empStatus = this.statusRef.nativeElement.value;
    const empGroup = this.groupRef.nativeElement.value;
    const empDescription = this.descriptionRef.nativeElement.value;
    const newEmployee = new Employee(empUserName, empFirstName, empLastName, empEmail, empBirthDate, empBasicSalary, empStatus, empGroup, empDescription)
    this.employeeService.addEmployee(newEmployee);
    this.router.navigate(['employees', 'list']);
  }

}
