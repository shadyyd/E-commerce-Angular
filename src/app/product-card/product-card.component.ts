import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;
  arr: any = [1, 2, 3, 4, 5];
  disc: number = 0;
  inCart: boolean = false;
  constructor(private cart: CartService) {}
  ngOnInit() {
    this.disc = this.product.discount;
    this.inCart = this.cart.inCart(this.product.id);
  }
  addOrRemoveToCart() {
    if (this.inCart) {
      this.cart.removeFromCart(this.product.id);
    } else {
      this.cart.addToCart(this.product);
    }
    this.inCart = !this.inCart;
  }
}
