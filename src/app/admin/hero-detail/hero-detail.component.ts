import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
