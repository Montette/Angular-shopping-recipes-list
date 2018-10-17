import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameRef: ElementRef;
  @ViewChild('amountInput') ingredientAmountRef: ElementRef;
  // @Output() addIngredient = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngredientHandler() {
    const newIngredient = {name: this.ingredientNameRef.nativeElement.value, amount: this.ingredientAmountRef.nativeElement.value}
    // this.addIngredient.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
