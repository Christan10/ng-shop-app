import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'),
    new Recipe('Spaghetti', 'This is spaghetti a test',
    'http://del.h-cdn.co/assets/17/03/980x490/landscape-1484951032-delish-kung-pao-spaghetti-3.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
