import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { TestsModule } from '@/tests/tests.module';
import { NewBookComponent } from './new-book.component';
import { AdminService } from '../../services/admin.service';

describe('NewBookComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  const mockAdminService = jasmine.createSpyObj('AdminService', {
    createBook: of()
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewBookComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestsModule],
      providers: [
        { provide: AdminService, useValue: mockAdminService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
