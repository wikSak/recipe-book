import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeS: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
this.route.params
.subscribe(
  (params: Params) => {
    this.id = +params['id'];
    this.recipe = this.recipeS.getRecipe(this.id);
  }
)
  }

  onAddToShoppingList(){
    this.recipeS.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
