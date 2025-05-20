import { Component, Input, Signal, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './beer-card.component.html',
  styleUrl: './beer-card.component.scss',
})
export class BeerCardComponent {
  readonly beer = input<Beer | undefined>(undefined);
  readonly imageUrl = input<string | undefined>(undefined);

  readonly onViewClick = output<void>();
  handleClick(): void {
    this.onViewClick.emit();
  }
}
