import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { AuthService } from '@/services/auth.service';
import { TestsModule } from '@/tests/tests.module';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  const mockAuthService = jasmine.createSpyObj('AuthService', {
    isConnected: false
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
