import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./components/remote-entry/entry.routes').then((m) => m.remoteRoutes),
  },
];
