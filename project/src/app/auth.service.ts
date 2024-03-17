import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Import RxJS operators (if needed)
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://your-backend-api-url/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(credentials);

    return this.http.post<any>(this.baseUrl, body, { headers })
      .pipe(
        map(response => {
          // Store the token securely (e.g., in local storage or a secure cookie)
          localStorage.setItem('token', response.token); // Placeholder - replace with secure storage
          return response;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error); // Log the error for debugging
    return throwError(error.message || 'Server error');
  }
}
