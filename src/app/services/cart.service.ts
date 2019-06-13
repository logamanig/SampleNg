import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];

    return this.items;
  }

  getShippingPrices(): Observable<ShippingPrice[]> {
    return this.httpClient.get<ShippingPrice[]>('/asset/shipping.json');
  }
}
