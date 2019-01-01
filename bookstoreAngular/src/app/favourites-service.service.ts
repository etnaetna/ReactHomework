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

  addFavourites(nekiOBject: BlogItem) {
    if (this.blogData.length === 0) {
      this.blogData[0] = nekiOBject;
    } else {
      this.blogData.push(nekiOBject);
    }
    console.log('poslje dodavanja');
    console.log(this.blogData);

  }

  removeFavourites(nekiOBject: BlogItem) {
    console.log('prije remove');
    console.log(this.blogData);
    this.blogData = this.blogData.filter((entry) => {
      console.log(entry);
      console.log(nekiOBject);
      console.log('########### oni su');
      console.log(entry === nekiOBject);
      if (entry === nekiOBject) {
        console.log('isti su');
      } else {
        return entry;
      }
    });
    console.log('poslje remove');
    console.log(this.blogData);

    this.getFavourites();
  }

  getFavourites(): Observable<BlogItem[]> {
    console.log('observale');
    console.log(this.blogData);
    return of(this.blogData);
  }
}
