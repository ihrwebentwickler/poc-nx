import { InjectionToken } from '@angular/core';

import { AppRoute } from '../interfaces/app';
import { APP_ROUTES } from '../constants/routes';

export const BASE_PATH = new InjectionToken<AppRoute[]>(
  'Application Routes Configuration',
  {
    providedIn: 'root',
    factory: () => APP_ROUTES,
  }
);
