import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BookModel } from '@/models';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent implements OnDestroy {
  subscriptions = new Subscription();
  book: BookModel = {} as BookModel;
  errorMessage?: string;
  submitted = false;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  handleSubmit(valid: boolean): void {
    this.submitted = true;

    if (valid) {
      this.createBook(this.book);
    }
  }

  private createBook(book: BookModel): void {
    this.subscriptions.add(
      this.adminService.createBook(book).subscribe({
        next: (newBook) => {
          console.log('Book created', newBook);
          this.router.navigate(['..'], {
            relativeTo: this.route
          });
        },
        error: (error) => this.errorMessage = error.message
      })
    );
  }
}
