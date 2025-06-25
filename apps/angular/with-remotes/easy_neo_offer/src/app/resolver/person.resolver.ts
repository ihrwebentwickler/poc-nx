import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { person$, PersonState } from '../stores/person.store';

export class PersonResolver implements Resolve<PersonState> {
  resolve(): Observable<PersonState> {
    return person$;
  }
}
