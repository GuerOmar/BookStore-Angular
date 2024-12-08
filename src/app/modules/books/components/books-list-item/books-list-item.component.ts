import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BookModel } from '@/models';

@Component({
  selector: 'app-books-list-item',
  templateUrl: './books-list-item.component.html',
  styleUrl: './books-list-item.component.scss'
})
export class BooksListItemComponent {
  @Input() book?: BookModel;
  @Output() authorClicked = new EventEmitter<string>();

  handleClick(evt: MouseEvent): void {
    this.authorClicked.emit(this.book?.author);
    evt.stopPropagation();
    evt.preventDefault();
  }
}
