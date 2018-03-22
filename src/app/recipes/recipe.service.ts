import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is pork with potatoes',
    'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  [
    new Ingredient('meat', 1),
    new Ingredient('Potatoes', 3)
  ]),
    new Recipe('Spaghetti', 'This is spaghetti mamas ',
    'http://del.h-cdn.co/assets/17/03/980x490/landscape-1484951032-delish-kung-pao-spaghetti-3.jpg',
  [
    new Ingredient('Tomatos', 3),
    new Ingredient('spaghetti', 1)
  ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
