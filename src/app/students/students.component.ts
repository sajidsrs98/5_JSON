import { Component } from '@angular/core';
import studentData from '../student.json';
interface Student {
  id: string; 
  name: string; 
  class: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor() {}

  students: Student[] = studentData;
}
