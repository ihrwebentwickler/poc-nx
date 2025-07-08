import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_PATH } from '../tokens/basepath';
import { OffersService } from '../api-offer-client';

@Injectable()
export class OffersServiceWrapperService extends OffersService {
  constructor(@Inject(BASE_PATH) basePath: string, http: HttpClient) {
    super(http, basePath);
  }
}
