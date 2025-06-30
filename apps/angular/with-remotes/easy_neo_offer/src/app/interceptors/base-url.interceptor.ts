import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { CONFIGURATION } from '../../assets/env';

export const baseUrlInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  // 1. URL-Prüfung und Bearbeitung
  let processedUrl = req.url;

  if (processedUrl.includes('offers/')) {
   // here clean up "error old api-client
    console.log(processedUrl);
  }

  // 2. Basis-URL anfügen
  const apiReq = req.clone({
    url: `${CONFIGURATION.API_URL}${processedUrl}`
  });


  return next(apiReq);
};
