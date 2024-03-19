import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://your-backend-api-url/auth'; // Заменете с реалния адрес на вашия API

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(credentials);

    return this.http.post<any>(`${this.baseUrl}/login`, body, { headers })
      .pipe(
        map(response => {
          localStorage.setItem('token', response.token); // Съхраняване на токена в локалното съхранение
          return response;
        }),
        catchError(this.handleError)
      );
  }

  isUserPasswordCorrect(credentials: { username: string; password: string }): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(credentials);

    return this.http.post<any>(`${this.baseUrl}/validate-password`, body, { headers })
      .pipe(
        map(response => {
          return response.isValid;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error.message || 'Server error');
  }
}
