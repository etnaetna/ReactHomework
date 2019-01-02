declare var require: any;

const json = require('./../assets/posts.json');

import { Injectable } from '@angular/core';
import { BlogItem } from './BlogItem';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesServiceService {
  blogData: BlogItem[] = [];

  constructor() { }

  addRemoveFromFavs(currObj: BlogItem): void {
    if (this.blogData.includes(currObj)) {
      this.removeFavourites(currObj);
    } else {
      this.addFavourites(currObj);
    }
  }

  addFavourites(nekiOBject: BlogItem): void {
    this.blogData.push(nekiOBject);
  }

  removeFavourites(nekiOBject: BlogItem) {
    this.blogData = this.blogData.filter((entry) => {
      if (entry !== nekiOBject) {
        return entry;
      }
    });

    this.getFavourites();
  }

  getFavourites(): Observable<BlogItem[]> {
    return of(this.blogData);
  }
}
