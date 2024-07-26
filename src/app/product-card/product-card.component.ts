import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiscountPipe } from '../discount.pipe';

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
  // constructor() {
  //   this.disc = this.product.discount;
  // }
  ngOnInit() {
    this.disc = this.product.discount;
  }
}
