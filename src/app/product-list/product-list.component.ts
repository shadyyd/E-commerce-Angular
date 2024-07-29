import { Component } from '@angular/core';
import { ProductCardComponent } from './../product-card/product-card.component';
import { ApiRequestsService } from './../services/api-requests.service';
import { SearchServiceService } from '../services/search-service.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any = [];
  filterdProducts: any = [];
  constructor(
    private api: ApiRequestsService,
    private search: SearchServiceService
  ) {}
  ngOnInit() {
    this.api
      .getProductsList()
      .subscribe(
        (res: any) => (this.products = this.filterdProducts = res.products)
      );
    this.search.getSearchQuery().subscribe((term) => {
      this.filterProducts(term);
    });
  }

  filterProducts(term: string) {
    if (!term) {
      this.filterdProducts = this.products;
    } else {
      this.filterdProducts = this.products.filter((product: any) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
    }
  }
}
