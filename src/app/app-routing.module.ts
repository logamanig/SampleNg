import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'heroes', pathMatch: 'full'
  },
  {
    path: 'heroes', component: HeroesComponent
  },
  {
    path: 'products', component: ProductListComponent, pathMatch: 'full',
  },
  {
    path: 'products/:productId', component: ProductDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'shipping', component: ShippingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
