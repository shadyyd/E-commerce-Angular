import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestsService {
  constructor(private http: HttpClient) {}

  getProductsList() {
    return this.http.get('https://dummyjson.com/products');
  }
  getProductDetails(id: string) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
