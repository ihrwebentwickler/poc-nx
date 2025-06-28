import { Injectable, inject } from '@angular/core';
import { BASE_PATH } from '../tokens/basepath';

@Injectable({ providedIn: 'root' })
export class TestTokenService {
  private readonly basePath = inject(BASE_PATH);

  getBasePath(): string {
    return this.basePath;
  }
}
