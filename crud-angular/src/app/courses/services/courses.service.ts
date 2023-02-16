import { Course } from './../model/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8080/api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        // delay(5000),
        tap(courses => console.log(courses)));
  }

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>) {
    console.log(record);
    if (record._id) {
      console.log('update');
      return this.update(record);
    }
    return this.create(record);
  }
  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>(`{this.API}/${record._id}`, record).pipe(first());
  }
}
