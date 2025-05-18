import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private readonly _BASE_URL = 'https://punkapi.online/v3';
  private readonly _HTTP = inject(HttpClient);

  getRandomBeer(): Observable<Beer> {
    return this._HTTP.get<Beer>(`${this._BASE_URL}/beers/random`);
  }

  getBeerById(id: string): Observable<Beer> {
    return this._HTTP.get<Beer>(`${this._BASE_URL}/beers/${id}`);
  }

  getBeersByPage(page_number: number): Observable<Beer[]> {
    return this._HTTP.get<Beer[]>(`${this._BASE_URL}/beers?page=${page_number}`);
  }

  getBeerImage(id: string): Observable<string> {
    return this._HTTP.get<string>(`${this._BASE_URL}/images/${id}.png`);
  }

}
