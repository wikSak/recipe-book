import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('apple', 2),
    new Ingredient('tomato', 20)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
