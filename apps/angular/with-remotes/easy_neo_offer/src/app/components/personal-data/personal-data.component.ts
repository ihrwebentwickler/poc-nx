import { Component, inject, OnInit } from '@angular/core';

import { TestTokenService } from '../../services/test-token.service';
import { SwapiService } from '../../services/swapi.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { setName } from '../../stores/person.store';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/app';
import { OfferResponseDTO, OffersService } from '../../api-offer-client';

@Component({
  selector: 'app-easy-neo-personal-data',
  standalone: true,
  templateUrl: 'personal-data.component.html',
  imports: [JsonPipe, FormsModule],
})
export class PersonalDataComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  offersService = inject(OffersService);
  testTokenService = inject(TestTokenService);
  swapiService = inject(SwapiService);

  cats!: any;
  personName = 'Jan';
  products!: Product[];
  offers!: OfferResponseDTO;

  public ngOnInit(): void {
    const test = this.testTokenService.getBasePath();
    console.log('TOKEN BASE_PATH hat den Wert: ' + test);

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

    // this.getOfferByIdBE(1);

    this.getOffersByOldWay();
  }

  // async getOfferById(id: number): Promise<void> {
  //   try {
  //     const offer$ = await this.getOfferByIdBE(1);
  //   } catch (error) {
  //     console.error('Fehler:', error);
  //   }
  // }
  //
  // getOfferByIdBE(id: number): Observable<OfferResponse> {
  //   return getOffer(id).pipe(
  //     catchError((error) => {
  //       console.error('Fehler:', error);
  //       throw error;
  //     }),
  //   );
  // }

  updatePersonalStore(): void {
    setName(this.personName);
  }

  getOffersByOldWay() {
    this.offersService.getOffer(123).subscribe({
      next: (data) => {
        this.offers = data;
      },
      error: (err) => {
        console.log(err.message || 'Fehler beim Laden');
      },
    });
  }
}
