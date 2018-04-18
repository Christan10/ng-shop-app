import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  SharedModule,
  ShoppingListModule,
  AuthModule,
  CoreModule,
];

const COMPONENTS = [
  AppComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: MODULES,
  bootstrap: [AppComponent]
})
export class AppModule { }
