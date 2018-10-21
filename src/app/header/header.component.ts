import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipesService } from '../recipes/recipes.service';
@Component({
selector: 'app-header',
templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataService: DataStorageService, private recipeService: RecipesService) {

    }
    onSaveData() {
        console.log('jsjs');
        this.dataService.storeRecipes()
            .subscribe(
                (response: Response) => console.log(response),
                (error) => console.log(error)
            );

    }

    onLoadData() {
        this.dataService.getRecipes()
            // .subscribe(
            //     (recipes) => {
            //         console.log(recipes);
            //         this.recipeService.loadRecipes(recipes);
            //     },
            //     (error) => console.log(error)
            // );
    }
}