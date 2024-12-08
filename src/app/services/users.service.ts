import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { UserModel } from '@/models';
import { environment } from '#/env';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }

  findUser(email: string, password: string): Observable<UserModel | undefined> {
    return this.getUsers().pipe(
      map((users) => users.find((u) => u.email === email && u.password === password))
    );
  }
}
