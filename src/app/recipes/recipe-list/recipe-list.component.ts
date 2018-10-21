import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() showDetails = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A test recipe', 'This is a test description', 'https://flockler.com/thumbs/sites/192/untitled_s600x600_c2318x1351_l0x1104.jpg'),
  //   new Recipe('A test2 recipe', 'This is a test2 description', 'https://flockler.com/thumbs/sites/192/untitled_s600x600_c2318x1351_l0x1104.jpg')
  // ];
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipesService: RecipesService) { 
   }

  ngOnInit() {
    this.subscription = this.recipesService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          console.log('recipe-list');
          console.log(recipes);
        }
      );
    this.recipes = this.recipesService.getRecipes();
    console.log(this.recipesService.getRecipes());
  }

  // recipeDetailsHandler(details: Recipe) {
  //   console.log(details);
  //   this.showDetails.emit(details);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
