import { Component, OnInit, Input } from '@angular/core';
import { BlogItem } from './../BlogItem';
import { FavouritesServiceService } from './../favourites-service.service';
import { VoteComponent } from './../vote/vote.component';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blogItemData: BlogItem;
  isFav: Boolean = false;
  constructor(private favServ: FavouritesServiceService) {
  }

  ngOnInit() {
  }

  addRemoveFav() {
    if (this.isFav) {
      this.removeFromFavs();
      this.isFav = !this.isFav;
    } else {
      this.addToFavs();
      this.isFav = !this.isFav;
    }
  }

  addToFavs() {
    this.favServ.addFavourites(this.blogItemData);
  }

  removeFromFavs() {
    this.favServ.removeFavourites(this.blogItemData);
  }
}
