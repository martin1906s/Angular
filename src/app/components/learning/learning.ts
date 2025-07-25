import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course-service';
import { StudentView } from "../student-view/student-view";

@Component({
  selector: 'app-learning',
  imports: [StudentView],
  templateUrl: './learning.html',
})
export class Learning implements OnInit {
  course!: Course;
  constructor(private service: CourseService) { }
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
