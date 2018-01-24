import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    new Recipe('Spaghetti', 'This is spaghetti a test',
    'http://del.h-cdn.co/assets/17/03/980x490/landscape-1484951032-delish-kung-pao-spaghetti-3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
