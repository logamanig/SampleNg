import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/product';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product: Product): void {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
