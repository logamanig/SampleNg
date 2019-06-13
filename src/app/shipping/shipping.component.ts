import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<ShippingPrice[]>;

  constructor(
    private cartService: CartService
  ) { 
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}
