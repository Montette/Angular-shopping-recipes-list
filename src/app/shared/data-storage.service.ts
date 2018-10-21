import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipesService) { }

  storeRecipes() {
    return this.http.put('https://ng-recipes-book-daaa7.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipes-book-daaa7.firebaseio.com/recipes.json')
      // .map(
      //   (response: Response) => {
      //     const data = response.json();
      //     return data;
      //   }
      // )
      // .catch(
      //   (error: Response) => {
      //     console.log(error);
      //     return Observable.throw('Something went wrong');
      //   }
      // );
      .subscribe(
      (response: Response) => {
          const data = response.json();
          this.recipeService.loadRecipes(data);
        },
        (error) => console.log(error)
    );
  }
}
