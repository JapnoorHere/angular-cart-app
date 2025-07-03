import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
      description: 'High-quality wireless headphones with noise cancellation',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
      description: 'Advanced fitness tracking and smart notifications',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 45,
      image:
        'https://m.media-amazon.com/images/I/8199s2tKUuL._AC_SL1500_.jpg',
      description: 'Ergonomic aluminum laptop stand for better posture',
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: 129,
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop',
      description: 'Programmable coffee maker with thermal carafe',
    },
    {
      id: 5,
      name: 'Backpack',
      price: 79,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
      description: 'Durable travel backpack with multiple compartments',
    },
    {
      id: 6,
      name: 'Desk Lamp',
      price: 65,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      description: 'LED desk lamp with adjustable brightness and color',
    },
  ];
}
