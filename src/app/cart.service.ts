import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter((item) => item !== product);
  }
}
