import { InjectionToken } from '@angular/core';

import { CONFIGURATION } from '../../assets/env';

export const BASE_PATH = new InjectionToken<string>(
  'Application Routes Configuration',
  {
    providedIn: 'root',
    factory: () => CONFIGURATION.API_URL,
  }
);
