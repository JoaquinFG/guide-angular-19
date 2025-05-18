import { Component, computed, inject, signal } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { BeerInfoComponent } from '../../components/beer-info/beer-info.component';
import { ButtonModule } from 'primeng/button';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-random',
  standalone: true,
  imports: [CommonModule, BeerInfoComponent, ButtonModule],
  templateUrl: './beer-random.component.html',
  styleUrls: ['./beer-random.component.scss'],
})
export class BeerRandomComponent {

  private readonly _beerService = inject(BeerService);

  infoButton = 'Generate'
    
  readonly randomBeer = toSignal(this._beerService.getRandomBeer(), { initialValue: undefined });
  readonly beerImage = computed(() =>
    this.randomBeer()?.image
  ? `https://punkapi.online/v3/images/${this.randomBeer()?.image}`
  : undefined
  );
  
  handleBeerClick(){
    ///////////////////Ejercicio Nº1
  }
  
  /* readonly randomBeer = signal<Beer | undefined>(undefined);
  readonly beerImage = computed(() =>
    this.randomBeer()?.image
      ? `https://punkapi.online/v3/images/${this.randomBeer()!.image}`
      : undefined
  );

  constructor() {
    this.loadRandomBeer();
  }

  loadRandomBeer(): void {
    this._beerService.getRandomBeer().subscribe((data) => {
      this.randomBeer.set(data);
    });
  }

  handleBeerClick(): void {
    this.loadRandomBeer();
  } */

  
}
