import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() details: Recipe;
  // details: Recipe;
  // constructor(private recipesService: RecipesService) {
  //   this.recipesService.recipeDetails.subscribe(
  //     (recipe: Recipe) => this.details = recipe );
  //  }
  constructor(private shoppingListService: ShoppingListService) {

  }
  ngOnInit() {
    console.log(this.details);
    // this.details = this.recipesService.recipeDetails;
  }

  addIngredients() {
    console.log(this.details.ingredients);
    // this.shoppingListService.addIngredient(...this.details.ingredients);
    this.details.ingredients.forEach(ingredient => this.shoppingListService.addIngredient(ingredient));
  }

}
