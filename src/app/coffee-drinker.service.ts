import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { ICoffeeDrinker } from './coffee-drinker';

@Injectable({
  providedIn: 'root'
})
export class CoffeeDrinkerService {
  private coffeeDrinkersUrl = 'api/coffee-drinkers/coffee-drinkers.json';

  constructor(private http: HttpClient) { }

  getCoffeeDrinkers(): Observable<ICoffeeDrinker[]> {
    return this.http.get<ICoffeeDrinker[]>(this.coffeeDrinkersUrl);
  }
}

