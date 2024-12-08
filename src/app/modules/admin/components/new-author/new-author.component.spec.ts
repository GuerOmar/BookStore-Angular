import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { TestsModule } from '@/tests/tests.module';
import { NewAuthorComponent } from './new-author.component';
import { AdminService } from '../../services/admin.service';

describe('NewAuthorComponent', () => {
  let component: NewAuthorComponent;
  let fixture: ComponentFixture<NewAuthorComponent>;

  const mockAdminService = jasmine.createSpyObj('AdminService', {
    createAuthor: of()
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAuthorComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TestsModule],
      providers: [
        { provide: AdminService, useValue: mockAdminService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
