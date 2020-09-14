import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { UniqueAlterEgoValidatorDirective } from './alter-ego.directive';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './identity-revealed.directive';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    FormTemplateComponent,
    FormReactiveComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    UniqueAlterEgoValidatorDirective,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
