import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '@/services/auth.service';

export const authGuard: CanMatchFn = (_route, _segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isConnected() ? true : router.createUrlTree(['/login'], {
    queryParams: {
      redirectUrl: router.getCurrentNavigation()?.extractedUrl
    }
  });
};
