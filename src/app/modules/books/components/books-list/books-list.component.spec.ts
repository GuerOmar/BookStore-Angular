import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { mockBooks } from '@/tests/mockData';
import { TestsModule } from '@/tests/tests.module';
import { BooksService } from '@/modules/books/services/books.service';
import { BooksListComponent } from './books-list.component';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  const mockBookService = jasmine.createSpyObj('BookService', {
    getBooks: of(mockBooks)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestsModule],
      providers: [
        { provide: BooksService, useValue: mockBookService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the right books items count', () => {
    const items = fixture.nativeElement.querySelectorAll('app-books-list-item');
    expect(items).toHaveSize(mockBooks.length);
  });

  it('should log the received author name', () => {
    spyOn(window.console, 'log');
    component.handleAuthorClicked('TOTO');
    expect(window.console.log).toHaveBeenCalledWith('Author clicked', 'TOTO');
  });
});
