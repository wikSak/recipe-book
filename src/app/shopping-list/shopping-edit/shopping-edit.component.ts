import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Output() addIngredient = new EventEmitter<Ingredient>();
// to samo co wyzej
// @Output() addIngredient = new EventEmitter<{name:string, amount:number}>();
//ElementRef optional
@ViewChild('nameInput', {static: false}) nameInput: ElementRef;
@ViewChild('amountInput', {static: false}) amountInput;

  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient(){
    this.addIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
    // to samo co wyzej
    // this.addIngredient.emit({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value});

  }

}
