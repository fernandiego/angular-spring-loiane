import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses$: Course[] = [];

  displayedColumns = ['name', 'category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // this.coursesService = new CoursesService();
  this.courses$ = this.coursesService.list()
  .pipe(
    catchError(error => {
      console.log(error);
      return of([]);
    })
  )
  }
  ngOnInit(): void {

  }
}
