import { Component, Output, EventEmitter } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';
import { SearchServiceService } from '../services/search-service.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchTerm: string = '';
  showSearch: boolean = false;
  cartCount = 0;
  constructor(
    private cart: CartService,
    private router: Router,
    private search: SearchServiceService
  ) {}
  ngOnInit() {
    this.cart.getCartCounter().subscribe((res) => (this.cartCount = res));
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSearch = this.router.url === '/';
        this.searchTerm = '';
      }
    });
  }

  searchProducts() {
    this.search.setSearchQuery(this.searchTerm);
  }
  clearSearch(input: any, e: any) {
    e.preventDefault();
    this.search.setSearchQuery('');
    input.value = '';
  }
}
