import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DiscountPipe } from '../discount.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DiscountPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.calculateTotalPrice();
    });
  }

  inc(id: number) {
    this.cart.IncreaseItemCount(id);
    this.updateCart();
  }

  dec(id: number) {
    this.cart.DecreaseItemCount(id);
    this.updateCart();
  }

  del(id: number) {
    this.cart.removeFromCart(id);
    this.updateCart();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => {
      const itemPrice =
        item.discountPercentage > 0
          ? item.price * (1 - item.discountPercentage / 100) * item.quantity
          : item.price * item.quantity;
      return total + itemPrice;
    }, 0);
  }

  updateCart() {
    this.cart.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.calculateTotalPrice();
    });
  }
}
