import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { BASE_PATH } from './tokens/basepath';
import { CONFIGURATION } from '../assets/env';
import { baseUrlInterceptor } from './interceptors/base-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([baseUrlInterceptor])),
    { provide: BASE_PATH, useValue: CONFIGURATION.API_URL },
    provideRouter(appRoutes),
  ],
};
