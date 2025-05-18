import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [ButtonModule, HeaderComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {

  title = 0;

  submitButton() {
    console.log('Button clicked!');
  }

  emmitReceived(event: number) {
    this.title += event;
    console.log(this.title)
  }

}
