import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private idChangeSub: Subscription
  ingredients: Ingredient[];
  constructor(private shoppingS: ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingS.getIngredients();
    this.idChangeSub = this.shoppingS.ingredientsChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }
  ngOnDestroy() {
    this.idChangeSub.unsubscribe();
  }

}
