import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) { }
  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns observable resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation);
  }

  confirmMat(): Observable<boolean> {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Discard changes?',
        close: 'Ok'
      }
    });

    return dialogRef.afterClosed();
  }
}
