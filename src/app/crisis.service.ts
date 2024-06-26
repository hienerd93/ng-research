import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Crisis } from './crisis';
import { CRISES } from '../assets/mock/mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );

  constructor(private messageService: MessageService) {}

  getCrises() {
    return this.crises$;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map((crises) => crises.find((crisis) => crisis.id === +id))
    );
  }
}
