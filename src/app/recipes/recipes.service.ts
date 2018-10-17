import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
     'This is a test description', 'https://flockler.com/thumbs/sites/192/untitled_s600x600_c2318x1351_l0x1104.jpg',
      [new Ingredient('apple', 3), new Ingredient('nuts', 20)]),
    new Recipe('A test2 recipe', 'This is a test2 description',
     'https://flockler.com/thumbs/sites/192/untitled_s600x600_c2318x1351_l0x1104.jpg',
     [new Ingredient('broccoli', 1), new Ingredient('chicken', 1)])
  ];
  recipeDetails = new EventEmitter<Recipe>();
  constructor() { }

  selectRecipe(recipe) {
    this.recipeDetails = recipe;
    console.log(this.recipeDetails);
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
