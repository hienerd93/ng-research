import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { Observable, of } from 'rxjs';
import { CRISES } from '../assets/mock/mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor() {}

  /** GET heroes from the server */
  getCrises(): Observable<Crisis[]> {
    return of(CRISES);
  }
}
