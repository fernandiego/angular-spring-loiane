import { ConfirmationDialogComponent } from './../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses$: Course[] = [];

  displayedColumns = ['_id','name', 'category', 'actions'];

  // coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos')
          return of([]);
        })
      );
  }

  refresh() {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([]);
      })
    );
  }

  onError(errorMessage: String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    }
    );
  }

  ngOnInit(): void {

  }
  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
    console.log('onAdd');
  }
  onEdit(course: Course){
    this.router.navigate(['edit', course._id], {relativeTo: this.route})
    console.log('onEdit');
  }
  onRemove(course: Course) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover este curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.coursesService.remove(course._id).subscribe(() => {
          this.refresh();
          this.snackBar
          .open('Curso removido com sucesso!', 'X',
          { duration: 3000, verticalPosition: 'top', horizontalPosition:'center' });
        },
        error => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }

}
