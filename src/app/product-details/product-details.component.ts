import { Component, Input, OnInit } from '@angular/core';
import * as jsonData from './../../assets/products.json';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  @Input() id: string = '';
  data: any = jsonData;
  products: any = [];
  product: any = null;
  arr: any = [1, 2, 3, 4, 5];
  rate: number = 0;
  stock: number = 0;
  ngOnInit() {
    this.products = this.data.default;
    // console.log(this.id);
    // console.log(this.products);
    this.product = this.products.find((el: any) => this.id == el.id);
    // console.log(this.product);
    this.rate = Number(this.product.rating);
    this.stock = Number(this.product.stock);
  }
}
