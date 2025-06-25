import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  httpClient = inject(HttpClient);

  getCats(): Observable<any> {
    return this.httpClient.get('https://api.thecatapi.com/v1/images/0XYvRd7oD');
  }
}
