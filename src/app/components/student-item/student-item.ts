import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr[student-item]',
  imports: [],
  templateUrl: './student-item.html',
})
export class StudentItem {
  @Input() item!: Student;

}
