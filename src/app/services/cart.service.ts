import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);
  private cartCounter = new BehaviorSubject<number>(0);
  constructor() {}

  getCartItems() {
    return this.cartItems.asObservable();
  }
  getCartCounter() {
    return this.cartCounter.asObservable();
  }
  addToCart(item: any) {
    const currentItems = this.cartItems.getValue();
    const existingItem: any = currentItems.find(
      (cur) => cur['id'] === item['id']
    );

    if (!existingItem) {
      item['quantity'] = 1;
      currentItems.push(item);
    }

    this.updateCart(currentItems);
  }
  removeFromCart(id: number) {
    let currentItems = this.cartItems.getValue();
    currentItems = currentItems.filter((item) => item.id !== id);
    console.log(currentItems);

    this.updateCart(currentItems);
  }

  IncreaseItemCount(id: number) {
    // console.log(id);
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.map((item) => {
      if (item.id === id) {
        if (item.quantity < item.stock) {
          item.quantity++;
        }
      }
      return item;
    });

    this.updateCart(updatedItems);
  }
  DecreaseItemCount(id: number) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.map((item) => {
      if (item.id === id) {
        if (item.quantity >= 2) {
          item.quantity--;
        }
      }
      return item;
    });
    this.updateCart(updatedItems);
  }

  updateCart(updatedItems: any[]) {
    this.cartItems.next(updatedItems);
    this.cartCounter.next(
      updatedItems.reduce((acc, curr) => acc + curr['quantity'], 0)
    );
  }
  inCart(id: number): boolean {
    const currentItems = this.cartItems.getValue();
    return !!currentItems.find((item) => item.id === id);
  }
}
