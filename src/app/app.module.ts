import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { CoreModule } from './core/core.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';


const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  SharedModule,
  ShoppingListModule,
  AuthModule,
  CoreModule,
];

const SERVICES = [
  ShoppingListService,
  RecipeService,
  DataStorageService,
  AuthService,
  AuthGuard
];

const COMPONENTS = [
  AppComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  providers: SERVICES,
  bootstrap: [AppComponent]
})
export class AppModule { }
