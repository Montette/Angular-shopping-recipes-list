import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [new Ingredient('fish', 1), new Ingredient('lemon', 2), new Ingredient('tomatoes', 4)];
  newIngredient = new Subject<Ingredient[]>();
  constructor() { }
  getIngredients() {
    return [...this.ingredients];
  }
  addIngredient(ingredient: Ingredient) {
    const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
    if (index === -1) {
    this.ingredients.push(ingredient);
    } else {
      this.ingredients[index].amount += ingredient.amount;
    }
    console.log(this.ingredients);
    this.newIngredient.next([...this.ingredients]);
  }
}
