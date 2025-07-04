import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private storageKey = 'marketplace-users';
  private currentUserKey = 'marketplace-current-user';

  constructor() {}

  signup(username: string, password: string): boolean {
    // Get existing users
    const users = this.getUsers();

    // Check if username already exists
    if (users.find((user) => user.username === username)) {
      return false;
    }

    // Add new user
    const newUser: User = { username, password };
    users.push(newUser);

    // Save to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(users));

    // Auto login after signup
    localStorage.setItem(this.currentUserKey, username);

    return  true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem(this.currentUserKey, username);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  getCurrentUser(): string | null {
    return localStorage.getItem(this.currentUserKey);
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  private getUsers(): User[] {
    const usersJson = localStorage.getItem(this.storageKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }
}
