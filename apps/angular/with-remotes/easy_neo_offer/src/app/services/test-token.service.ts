import { Injectable, inject } from '@angular/core';
import { BASE_PATH } from '../tokens/basepath';
import { AppRoute } from '../interfaces/app';

@Injectable({ providedIn: 'root' })
export class TestTokenService {
  private readonly basePath = inject(BASE_PATH);

  getBasePath(): AppRoute[] {
    return this.basePath;
  }
}
