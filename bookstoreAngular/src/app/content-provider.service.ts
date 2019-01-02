declare var require: any;

const json = require('./../assets/posts.json');

import { Injectable } from '@angular/core';
import { BlogItem } from './BlogItem';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentProviderService {
  siteData: BlogItem[] = json;
  filteredSiteData: BlogItem[] = [];
  filterString: String = '';

  constructor() { }

  refreshContent(): void {
    this.filteredSiteData = this.siteData.filter((blogEntry: BlogItem) => {
      if (blogEntry.title.indexOf(String(this.filterString)) !== -1) {
        return blogEntry;
      }
    });
  }

  getContent(): Observable<BlogItem[]> {
    this.refreshContent();

    return of(this.filteredSiteData);
  }

  setFilter(filterValue: string): void {
    this.filterString = filterValue;
  }
}
