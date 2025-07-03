import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  getTotal(): number {
    return this.cartService.getCartTotal();
  }

  increaseQuantity(item: any) {
    this.cartService.updateQuantity(item.id, (item.quantity || 1) + 1);
  }

  decreaseQuantity(item: any) {
    this.cartService.updateQuantity(item.id, (item.quantity || 1) - 1);
  }
}
