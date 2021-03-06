import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';
import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from 'src/app/recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from 'src/app/recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailsComponent},   
        {path: ':id/edit', component: RecipeEditComponent}
    ]
},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
