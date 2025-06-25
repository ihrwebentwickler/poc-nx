import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { BASE_PATH } from './tokens/basepath';
import { environment } from './environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withFetch(),
    ),
    { provide: BASE_PATH, useValue: environment.basePath },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes)
  ],
};
