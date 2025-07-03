import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CartComponent } from './cart.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
];
