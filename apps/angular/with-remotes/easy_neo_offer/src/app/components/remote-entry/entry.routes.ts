import { Route } from '@angular/router';

import { PersonalDataComponent } from '../personal-data/personal-data.component';
import { TariffComponent } from '../tariff/tariff.component';
import { ProductsResolver } from '../../resolver/product.resolver';

export const remoteRoutes: Route[] = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },
  {
    path: 'person',
    component: PersonalDataComponent,
    resolve: { products: ProductsResolver },
  },
  {
    path: 'tarif',
    component: TariffComponent,
  },
  { path: '**', redirectTo: 'person', pathMatch: 'full' },
];
