import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const httpOptions ={
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'

  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //private apiUrl ='https://localhost:7098/api/users';
  private apiUrl ='http://localhost:5066/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserId(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<User>(this.apiUrl, user, httpOptions);
  }

  deleteUser(userId: number): Observable<any> {
    const url =`${this.apiUrl}/${userId}`;
    return this.http.delete<number>(url, httpOptions);
  }
}
