import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@/modules/shared/shared.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksListItemComponent } from './components/books-list-item/books-list-item.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksService } from './services/books.service';

@NgModule({
  declarations: [
    BooksListComponent,
    BooksListItemComponent,
    BookDetailsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  exports: [
    BooksListComponent
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
