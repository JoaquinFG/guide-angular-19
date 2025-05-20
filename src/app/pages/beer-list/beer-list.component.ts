import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerService } from '../../services/beer.service';
import { Beer } from '../../models/beer.model';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { ProgressSpinner } from 'primeng/progressspinner';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, BeerCardComponent, ProgressSpinner, ToolbarComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
})
export class BeerListComponent {
  private readonly beerService = inject(BeerService);
  isLoadingBeers = signal(true);
  readonly beers = signal<Beer[] | undefined>(undefined);

  constructor() {
    this.loadBeers(1);
  }

  loadBeers(page: number): void {
    this.beerService.getBeersByPage(page).subscribe((data) => {
      this.beers.set(data);
    })
  }

  readonly selectedBeer = signal<Beer | null>(null);
  handleViewBeer = (beer: Beer) => {
    this.selectedBeer.set(beer);
    console.log('Selected Beer:', beer);
  };
}
