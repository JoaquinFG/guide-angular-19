import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerService } from '../../services/beer.service';
import { Beer } from '../../models/beer.model';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, BeerCardComponent, ProgressSpinner, ToolbarComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
})
export class BeerListComponent {
  private readonly beerService = inject(BeerService);
  private readonly router = inject(Router);

  readonly isLoadingBeers = signal(true);
  readonly beers = signal<Beer[] | undefined>(undefined);

  constructor() {
    this.loadBeers(1);
  }

  loadBeers(page: number): void {
    this.isLoadingBeers.set(true);

    this.beerService.getBeersByPage(page).subscribe({
      next: (data) => {
        this.beers.set(data);
        this.isLoadingBeers.set(false);
      },
      error: (err) => {
        console.error('Error al cargar las cervezas', err);
        this.isLoadingBeers.set(false);
      },
      complete: () => {
        console.log('Carga de cervezas finalizada');
      }
    });
  }

  handleViewBeer = (id: number): void => {
    this.router.navigate(['details', id]);
  };
}
