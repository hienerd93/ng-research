import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component'

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent],
  imports: [CommonModule, FormsModule, HeroesRoutingModule],
})
export class HeroesModule {}
