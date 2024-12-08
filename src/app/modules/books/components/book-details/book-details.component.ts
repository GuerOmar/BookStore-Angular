import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { BookModel } from '@/models';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  errorMessage?: string;
  book?: BookModel;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    if (Number.isNaN(id)) {
      this.errorMessage = 'Invalid book identifier!';
    } else this.subscriptions.add(
      this.booksService.getBook(id).subscribe({
        next: (book) => this.book = book,
        error: (error) => this.errorMessage = error.message
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
