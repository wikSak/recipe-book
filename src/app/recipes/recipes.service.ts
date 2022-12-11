import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('First Recipe',
    'Desc',
     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
     [
       new Ingredient('meat', 1),
       new Ingredient('tomatoes', 2),
     ]),   
    new Recipe('Sec Recipe','Desc2', 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('teriyaki sauce', 1),
      new Ingredient('herbs', 1),
  ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
}
