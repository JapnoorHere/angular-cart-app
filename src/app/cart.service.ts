import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private storageKey = 'shopping-cart';
  cart: any[] = [];

  constructor() {
    this.loadCartFromStorage();
  }

  addToCart(product: any) {
    // Check if product already exists in cart
    const existingItem = this.cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If product exists, increase quantity
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      // If new product, add with quantity 1
      this.cart.push({ ...product, quantity: 1 });
    }

    this.saveCartToStorage();
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter((item) => item.id !== product.id);
    this.saveCartToStorage();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(item);
      } else {
        item.quantity = quantity;
        this.saveCartToStorage();
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCartToStorage();
  }

  getCartCount(): number {
    return this.cart.reduce((total, item) => total + (item.quantity || 1), 0);
  }

  getCartTotal(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  }

  private loadCartFromStorage() {
    try {
      const savedCart = localStorage.getItem(this.storageKey);
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      this.cart = [];
    }
  }

  private saveCartToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }
}
