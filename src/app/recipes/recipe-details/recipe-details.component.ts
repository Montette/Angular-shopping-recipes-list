import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // @Input() details: Recipe;
  details: Recipe;
  id: number;
  paramsSubscription: Subscription;
  // constructor(private recipesService: RecipesService) {
  //   this.recipesService.recipeDetails.subscribe(
  //     (recipe: Recipe) => this.details = recipe );
  //  }
  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute) {
    // let allRecipes = this.recipesService.getRecipes();
    // console.log(allRecipes);
    // this.details = allRecipes[0];
  }
  ngOnInit() {
    // console.log(this.details);
    // this.details = this.recipesService.recipeDetails;
    // let allRecipes = this.recipesService.getRecipes();
    // console.log(allRecipes);
    // this.details = allRecipes[0];
    // console.log(this.details);
    // this.id = this.route.snapshot.params['id'];
    // this.details = allRecipes[this.id];
    // this.details = this.recipesService.getRecipe(0);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.details = this.recipesService.getRecipe(this.id);
      }
    );
  }

  addIngredients() {
    console.log(this.details.ingredients);
    // this.shoppingListService.addIngredient(...this.details.ingredients);
    this.details.ingredients.forEach(ingredient => this.shoppingListService.addIngredient(ingredient));
  }

}
