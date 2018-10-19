import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // id: number;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // this.recipesService.getRecipe(this.id)
  }

  // selectRecipe() {
  //   // this.recipesService.selectRecipe(this.recipe);
  //   this.recipesService.recipeDetails.emit(this.recipe);
  // }
}
