import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const httpDuration: HttpInterceptorFn = (req, next) => {
  const start = performance.now();

  return next(req).pipe(
    finalize(() => {
      const stop = performance.now();
      console.log('INTERCEPTOR time', stop - start);
    })
  )
};
