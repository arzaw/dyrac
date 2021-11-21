import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../contact';

const httpHeaders  = new HttpHeaders().set('Content-Type', 'application/json')
@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private apiUrl = 'http://localhost:5000/v1/api'

  constructor(private http:HttpClient) { }

  addContactMessage(contact: Contact): Observable<Contact>{
    const url = this.apiUrl + '/contact'
    return this.http.post<Contact>(url, contact, {headers: httpHeaders})
  }
}
