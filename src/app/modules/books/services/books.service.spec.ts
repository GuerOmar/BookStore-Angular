import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { mockBooks } from '@/tests/mockData';
import { TestsModule } from '@/tests/tests.module';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let controller: HttpTestingController;
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestsModule],
      providers: [BooksService]
    });
    service = TestBed.inject(BooksService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve books', () => {
    service.getBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
    });

    const req = controller.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
    controller.verify();
  });
});
