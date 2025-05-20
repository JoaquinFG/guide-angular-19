import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-beer-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, TextareaModule],
  templateUrl: './beer-create.component.html',
  styleUrl: './beer-create.component.scss'
})
export class BeerCreateComponent {
  private fb = inject(FormBuilder);

  // Formulario reactivo con validaciones
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

  // Signal para validación reactiva
  isValid = computed(() => this.form.valid);

  // Enviar
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

  // Acceso rápido desde la plantilla
  get f() {
    return this.form.controls;
  }
}
