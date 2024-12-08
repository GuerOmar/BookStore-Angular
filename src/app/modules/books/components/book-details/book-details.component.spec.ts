import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { mockBook } from '@/tests/mockData';
import { TestsModule } from '@/tests/tests.module';
import { BooksService } from '@/modules/books/services/books.service';
import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  const mockBookService = jasmine.createSpyObj('BookService', {
    getBook: of(mockBook)
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestsModule],
      providers: [
        { provide: BooksService, useValue: mockBookService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
