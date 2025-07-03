import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn = false;
  username = '';
  showLogin = false;
  showSignup = false;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
      this.username = user;
    }
  }

  login(username: string) {
    localStorage.setItem('user', username);
    this.isLoggedIn = true;
    this.username = username;
    this.showLogin = false;
  }

  signup(username: string) {
    localStorage.setItem('user', username);
    this.isLoggedIn = true;
    this.username = username;
    this.showSignup = false;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.username = '';
  }
}
