import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Product List' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found Page',
  },
];
