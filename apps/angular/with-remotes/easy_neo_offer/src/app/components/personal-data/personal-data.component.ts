import { Component, inject, OnInit } from '@angular/core';

import { TestTokenService } from '../../services/test-token.service';
import { SwapiService } from '../../services/swapi.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { setName } from '../../stores/person.store';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/app';

@Component({
  selector: 'app-easy-neo-personal-data',
  standalone: true,
  templateUrl: 'personal-data.component.html',
  imports: [JsonPipe, FormsModule],
})
export class PersonalDataComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  testTokenService = inject(TestTokenService);
  swapiService = inject(SwapiService);

  cats!: any;
  personName = 'Jan';
  products!: Product[];

  public ngOnInit(): void {
    const test = this.testTokenService.getBasePath();
    console.log(' TOKEN BASE_PATH hat den Wert:');
    console.log(test);

    this.swapiService.getCats().subscribe({
      next: (data) => {
        this.cats = data;
      },
      error: (err) => {
        console.error('API Fehler beim Laden der Katzen:', err);
      },
    });

    this.activatedRoute.data.subscribe((response: any) => {
      this.products = response.products;
    });
  }

  updatePersonalStore(): void {
    setName(this.personName);
  }
}
