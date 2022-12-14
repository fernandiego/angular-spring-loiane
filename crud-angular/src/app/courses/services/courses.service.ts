import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/course.json';

  constructor(private httpClient: HttpClient) { }
  // (method) CoursesService.list(): Observable<Object>

  list() {
    return this.httpClient.get<Course[]>(this.API);
  }
}
