import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../models/auth';
import { Contact, contactId } from '../models/contactModel';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.get(`${environment.api}/user/login/${email}/${password}`).pipe(
      switchMap((user) => {
        if (user) {
          return of(user);
        } else {
          return throwError('Unable to login');
        }
      })
    );
  }

  register(user:User): Observable<any> {
    return this.http.post(`${environment.api}/user`,user).pipe(
      switchMap((user) => {
        if (user) {
          return of(user);
        } else {
          return throwError('Unable to login');
        }
      })
    );
  }
}



