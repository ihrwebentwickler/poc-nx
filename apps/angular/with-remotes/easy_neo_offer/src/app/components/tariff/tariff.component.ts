import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { person$, PersonState } from '../../stores/person.store';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TestTokenService } from '../../services/test-token.service';

@Component({
  selector: 'app-easy-neo-offer-tariff',
  standalone: true,
  templateUrl: './tariff.component.html',
  imports: [JsonPipe, AsyncPipe],
})
export class TariffComponent implements OnInit {
  testTokenService = inject(TestTokenService);
  basePathContent!: string;
  personName$!: Observable<PersonState>;

  public ngOnInit(): void {
    this.basePathContent = this.testTokenService.getBasePath();
    this.personName$ = person$;
  }
}
