import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true //por defecto
})
export class HeaderComponent implements OnInit {

  title = input<number>();
  onEmmit = output<number>();

  items: MenuItem[] | undefined;

  constructor(){}

  ngOnInit(){
    this.items = [
      {
          label: 'Beer',
          icon: 'pi pi-trophy',
          routerLink: '/',
      },
      {
          label: 'Random',
          icon: 'pi pi-sync',
          routerLink: '/random'
      }   
    ]
  }

  onClick(){
    this.onEmmit.emit(1)
  }
}