import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockBook } from '@/tests/mockData';
import { BooksListItemComponent } from './books-list-item.component';

describe('BooksListItemComponent', () => {
  let component: BooksListItemComponent;
  let fixture: ComponentFixture<BooksListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render section when book undefined', () => {
    const title = fixture.nativeElement.querySelector('[data-testid="title"]');
    expect(title).toBeFalsy();

    const author = fixture.nativeElement.querySelector('[data-testid="author"]');
    expect(author).toBeFalsy();
  });

  it('should render book title and author when book is defined', () => {
    component.book = mockBook;
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector('[data-testid="title"]');
    expect(title?.textContent).toContain(component.book?.title);

    const author = fixture.nativeElement.querySelector('[data-testid="author"]');
    expect(author?.textContent).toContain(component.book?.author);
  });

  it('should notify parent when author is clicked', () => {
    component.book = mockBook;
    fixture.detectChanges();

    const author = fixture.nativeElement.querySelector('[data-testid="author"]');
    expect(author).toBeTruthy();

    spyOn(component.authorClicked, 'emit');
    author.click();

    expect(component.authorClicked.emit).toHaveBeenCalledWith(mockBook.author);
  });
});
