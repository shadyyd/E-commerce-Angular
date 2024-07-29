import { Component, Input } from '@angular/core';
import { ApiRequestsService } from '../services/api-requests.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() id: string = '';
  product: any = null;
  arr: any = [1, 2, 3, 4, 5];
  inCart: boolean = false;

  constructor(private api: ApiRequestsService, private cart: CartService) {}
  ngOnInit() {
    this.api
      .getProductDetails(this.id)
      .subscribe((data) => (this.product = data));
    this.inCart = this.cart.inCart(Number(this.id));
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
