import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { HighlightDirective } from './highlight.directive';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent,
    HighlightDirective,
  ],
  imports: [CommonModule, FormsModule, CrisisCenterRoutingModule],
})
export class CrisisCenterModule {}
