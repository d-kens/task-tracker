import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Task, NewTask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://api:3000/tasks';

  constructor(private http: HttpClient) {}

  // Method to generate stardard option for every request
  private getStandardOptions(): { headers: HttpHeaders; params?: HttpParams } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }


  getTasks(): Observable<Task[]> {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });

    return this.http.get<Task[]>(this.baseUrl, options).pipe(catchError(this.handleError.bind(this)));
  }

  addTask(task: NewTask): Observable<Task> {
    const options = this.getStandardOptions();

    return this.http.post<Task>(this.baseUrl, task, options).pipe(
      catchError(this.handleError.bind(this))
    )
  }

  deleteTask(id: number): Observable<{ message: string }> {
    const options = this.getStandardOptions();


    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`, options).pipe(
      catchError(this.handleError.bind(this))
    );
  }


  private handleError(error: HttpErrorResponse) {

    if (error.status === 0) {
      console.error('There is an issue with the client or network: ', error.error);
    } else {
      console.error('Server-side error: ', error.error)
    }

    return throwError(() => Error('Cannot retrieve tasks from the server. Please try again.'))
  }

}
