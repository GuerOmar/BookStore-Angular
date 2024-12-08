import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthService } from './auth.service';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;

  const mockUserService = jasmine.createSpyObj('UserService', {
    findUser: of(undefined)
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UsersService, useValue: mockUserService }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
