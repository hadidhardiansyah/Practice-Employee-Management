export class Employee {
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public birthDate: Date;
  public basicSalary: number;
  public status: string;
  public group: string;
  public description: Date;


  constructor(username: string, firstName: string, lastName: string, email: string, birthDate: Date, basicSalary: number, status: string, group: string, description: Date) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDate = birthDate;
    this.basicSalary = basicSalary;
    this.status = status;
    this.group = group;
    this.description = description;
  }
}
