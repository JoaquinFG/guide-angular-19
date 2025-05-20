import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';
import { map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-beer-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, TextareaModule, CalendarModule],
  templateUrl: './beer-create.component.html',
  styleUrl: './beer-create.component.scss'
})
export class BeerCreateComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required]],
    tagline: ['', Validators.required],
    first_brewed: ['', Validators.required],
    abv: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    ibu: [null, [Validators.required, Validators.min(0)]],
    ph: [null, [Validators.required, Validators.min(0), Validators.max(14)]],
    brewers_tips: ['', Validators.required],
    food_pairing: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.valid) {
      const beers = JSON.parse(localStorage.getItem('beers') || '[]');
      beers.push(this.form.value);
      localStorage.setItem('beers', JSON.stringify(beers));
      this.form.reset();
      alert('Cerveza guardada en localStorage 🍺');
    } else {
      this.form.markAllAsTouched();
    }
  }

  get f() {
    return this.form.controls;
  }
}
