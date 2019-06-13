import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'heroes', component: HeroesComponent, pathMatch: 'full'
  },
  {
    path: 'heroes/:heroId', component: HeroDetailComponent
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
