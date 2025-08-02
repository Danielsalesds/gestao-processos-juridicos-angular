import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export function authInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> {
  const apiKey = 'cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

  const cloned = req.clone({
    setHeaders: {
      Authorization: `APIKey ${apiKey}`,
      Accept: 'application/json',
    },
  });
  console.log('Interceptando requisição, headers:', cloned.headers.get('Authorization'));


  return next(cloned);
}
