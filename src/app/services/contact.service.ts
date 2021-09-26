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
export class ContactService {
  
  constructor(private http: HttpClient) { }

  create(contact: any): Observable<Contact> {
      console.log(contact);
    return this.http.post<Contact>(`${environment.api}/contact`, contact);
  }



}


// }
