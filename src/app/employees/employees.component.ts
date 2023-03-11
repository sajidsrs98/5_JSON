import { Component } from '@angular/core';
import employeeData from '../employee.json';
interface Employee {
  id: string;
  name: string;
  gender: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  constructor() {}

  employees: Employee[] = employeeData;
}
