import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { BookModel } from '@/models';
import { environment } from '#/env';

@Injectable()
export class BooksService {
  readonly apiUrl = `${environment.apiUrl}/books`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.apiUrl);
  }

  getBook(id: number): Observable<BookModel> {
    return this.http.get<BookModel>(`${this.apiUrl}/${id}`);
  }
}
