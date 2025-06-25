import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { RemoteEntryComponent } from './app/components/remote-entry/remote-entry.component';

bootstrapApplication(RemoteEntryComponent, appConfig).catch((err) => console.error(err));
