import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { AuthService } from '@/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (authService.connectedUser) {
    req = req.clone({
      headers: req.headers.set(
        'authorization',
        `bearer ${JSON.stringify(authService.connectedUser)}`
      )
    });
  }

  return next(req);
};
