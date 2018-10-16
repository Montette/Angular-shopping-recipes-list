import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('fish', 1), new Ingredient('lemon', 2), new Ingredient('tomatoes', 4)];
  constructor() { }

  ngOnInit() {
  }

  addNewIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }
}
