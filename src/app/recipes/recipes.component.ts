import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // recipeDetails: Recipe;
  
  constructor(private recipesService: RecipesService) {
    
  }

  ngOnInit() {
    // this.recipesService.recipeDetails.subscribe(
    //   (recipe: Recipe) => this.recipeDetails = recipe );
  }
  // showRecipeDetails(recipeDetailsData) {
  //  this.recipeDetails = recipeDetailsData;
  //  console.log(this.recipeDetails);
  // }

}
