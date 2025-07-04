import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CartComponent } from './pages/cart.component';
import { ContactComponent } from './pages/contact.component';
import { LoginComponent } from './auth/login.component';
import { SignupComponent } from './auth/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];
