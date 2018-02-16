import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  [
    new Ingredient('meat', 1)
  ]),
    new Recipe('Spaghetti', 'This is spaghetti a test',
    'http://del.h-cdn.co/assets/17/03/980x490/landscape-1484951032-delish-kung-pao-spaghetti-3.jpg',
  [
    new Ingredient('Tomatos', 3),
    new Ingredient('spaghetti', 1)
  ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
