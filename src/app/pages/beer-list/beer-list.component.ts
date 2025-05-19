import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerService } from '../../services/beer.service';
import { Beer } from '../../models/beer.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, BeerCardComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
})
export class BeerListComponent {
  private readonly beerService = inject(BeerService);

  readonly beers = toSignal(this.beerService.getBeersByPage(1), { initialValue: [] });

  readonly selectedBeer = signal<Beer | null>(null);

  handleViewBeer = (beer: Beer) => {
    this.selectedBeer.set(beer);
    console.log('Selected Beer:', beer);
  };
}
