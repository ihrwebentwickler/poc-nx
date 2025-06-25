import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'offer',
    loadChildren: () =>
      import('easy_neo_offer/Routes').then((m) => m!.remoteRoutes),
  }
];
