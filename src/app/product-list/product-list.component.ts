import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from './../product-card/product-card.component';
import * as jsonData from './../../assets/products.json';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  data: any = jsonData;
  products: any = [];
  ngOnInit() {
    this.products = this.data.default;
  }
}
