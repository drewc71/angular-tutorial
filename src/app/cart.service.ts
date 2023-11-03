import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';


export interface ShipCost
{
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  addToCart(product: Product) { this.items.push(product); }
  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items; }

  getShippingPrices() 
  {
    return this.httpClient.get<ShipCost[]>('assets/shipping.json');
  }
}

