import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';
import { StudentItem } from "../student-item/student-item";

@Component({
  selector: 'student-view',
  standalone: true,
  templateUrl: './student-view.html',
  imports: [StudentItem],
})
export class StudentView {
  @Input() students: Student[] = [];
}
