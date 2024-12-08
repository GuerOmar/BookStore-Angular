import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BookModel } from '@/models';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  errorMessage?: string;
  books?: BookModel[];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.booksService.getBooks().subscribe({
        next: (books) => this.books = books,
        error: (error) => this.errorMessage = error.message
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  handleAuthorClicked(authorName: string): void {
    console.log('Author clicked', authorName);
  }
}
