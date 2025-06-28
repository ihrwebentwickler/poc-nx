import { HttpInterceptorFn } from '@angular/common/http';
import { CONFIGURATION } from '../../assets/env';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    url: `${CONFIGURATION.API_URL}${req.url}`, // BasePath prependen
  });
  return next(apiReq);
};
