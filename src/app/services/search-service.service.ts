import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  private searchQuery = new BehaviorSubject<string>('');
  constructor() {}

  getSearchQuery() {
    return this.searchQuery.asObservable();
  }
  setSearchQuery(query: string) {
    this.searchQuery.next(query);
  }
}
