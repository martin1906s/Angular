import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/Course';
import { CourseService } from '../../services/course-service';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.html',
})
export class Learning implements OnInit {
  course!: Course;
  constructor(private service: CourseService) { }
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
