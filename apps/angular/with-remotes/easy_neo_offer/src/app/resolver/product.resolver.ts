import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../interfaces/app';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<Product> {
  resolve(route: ActivatedRouteSnapshot): Observable<Product> {
    console.log('Called Get Product in resolver...', route);

    const product: Product = {
      id: '1234',
      name: 'Butter Halbfett Magarine',
    };

    return of(product);
  }
}
