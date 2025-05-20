import { Component, output } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms'; // Para ngModel

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [Toolbar, ButtonModule, InputTextModule, IconField, InputIcon, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  pageNumber: number | null = null;

  readonly onSearchBeerPage = output<number>();

  printPage() {
    window.print();
  }

  downloadPage() {
    const content = document.documentElement.outerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'pagina.html';
    a.click();

    URL.revokeObjectURL(url);
  }

  searchBeerPage(page: number | null) {
    if (page !== null && page > 0) {
      this.onSearchBeerPage.emit(page);
    }
  }
}
