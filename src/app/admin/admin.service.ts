import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const ALTER_EGOS = ['Shine'];

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  isAlterEgoTaken(alterEgo: string): Observable<boolean> {
    const isTaken = ALTER_EGOS.includes(alterEgo);

    return of(isTaken).pipe(delay(400));
  }
}
