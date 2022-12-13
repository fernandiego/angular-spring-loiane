import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id:"1", name: 'Angular', category: 'Front-end'}
  ];
  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
   }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }

}
