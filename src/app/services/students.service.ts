import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  public baseUrl = 'https://localhost:7246/api/Student';
  constructor(private http: HttpClient) { }

  public handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`
      );
    }
    return throwError('Something went wrong; please try again later.');
  }
  
    GetAllStudentList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetAllStudentList`).pipe(catchError(this.handleError));
  }

  

}

