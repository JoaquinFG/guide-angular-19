import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beer.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BeerInfoComponent } from '../../components/beer-info/beer-info.component';

@Component({
  selector: 'app-beer-details',
  imports: [CommonModule, BeerInfoComponent],
  templateUrl: './beer-details.component.html',
  styleUrl: './beer-details.component.scss'
})
export class BeerDetailsComponent {
  private route = inject(ActivatedRoute);
  private beerService = inject(BeerService);

  readonly infoButton = 'Atrás';

  // Obtener el ID desde la URL
  readonly id = this.route.snapshot.paramMap.get('id') ?? '';

  // Convertir el observable a signal
  readonly beer = toSignal(this.beerService.getBeerById(this.id), {
    initialValue: null,
  });
  readonly beerImage = computed(() =>
    this.beer()?.image
      ? `https://punkapi.online/v3/images/${this.beer()!.image}`
      : undefined
  );

  goBack() {
    window.history.back();
  }
}
