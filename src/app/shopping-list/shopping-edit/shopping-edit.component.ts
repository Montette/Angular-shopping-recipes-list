import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameRef: ElementRef;
  @ViewChild('amountInput') ingredientAmountRef: ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredientHandler() {
    const newIngredient = {name: this.ingredientNameRef.nativeElement.value, amount: this.ingredientAmountRef.nativeElement.value}
    this.addIngredient.emit(newIngredient);
  }
}
