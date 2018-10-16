import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() showDetails = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test description', 'https://flockler.com/thumbs/sites/192/untitled_s600x600_c2318x1351_l0x1104.jpg'),
    new Recipe('A test2 recipe', 'This is a test2 description', 'https://flockler.com/thumbs/sites/192/untitled_s600x600_c2318x1351_l0x1104.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  recipeDetailsHandler(details: Recipe) {
    console.log(details);
    this.showDetails.emit(details);
  }
}
