import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  // Define API
  apiURL = 'http://localhost:2021';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Fetch user list
  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user')
  }

  //  Fetch user by id
  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user/' + id)
  }

  // Create user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + '/user', JSON.stringify(user), this.httpOptions)
  }

  // Update user
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(this.apiURL + '/user/' + id, JSON.stringify(user), this.httpOptions)
  }

  // Delete user
  deleteUser(id: string) {
    return this.http.delete<User>(this.apiURL + '/user/' + id, this.httpOptions);
  }
}
