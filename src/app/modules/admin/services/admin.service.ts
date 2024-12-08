import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthorModel, BookModel } from '@/models';
import { environment } from '#/env';

@Injectable()
export class AdminService {
  readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createBook(book: BookModel): Observable<BookModel> {
    return this.http.post<BookModel>(`${this.apiUrl}/books`, book);
  }

  createAuthor(author: AuthorModel): Observable<AuthorModel> {
    return this.http.post<AuthorModel>(`${this.apiUrl}/authors`, author);
  }
}
