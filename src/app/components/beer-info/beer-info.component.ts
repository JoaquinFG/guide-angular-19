import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Beer } from '../../models/beer.model';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-beer-info',
  standalone: true,
  imports: [CommonModule, ButtonModule, ProgressSpinnerModule],
  templateUrl: './beer-info.component.html',
  styleUrls: ['./beer-info.component.scss']
})
export class BeerInfoComponent {

  readonly beer = input<Beer | undefined>(undefined);
  readonly imageUrl = input<string | undefined>(undefined);
  readonly infoButton = input<string>('');
  readonly onClickBtn = output<void>();
  
  isImageLoading = signal(true);
  handleImageLoad(): void {
    this.isImageLoading.set(false);
  }
  handleClick() {
    this.onClickBtn.emit();
  }

}
