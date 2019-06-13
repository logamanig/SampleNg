import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: Product[];

  constructor(
    private cartService: CartService
  ) { 
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}
