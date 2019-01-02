import { Component, OnInit, Input } from '@angular/core';
import { BlogItem } from './../BlogItem';
import { FavouritesServiceService } from './../favourites-service.service';
import { VoteComponent } from './../vote/vote.component';
import { TransferItemDataService } from './../transfer-item-data.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blogItemData: BlogItem;
  isFav: Boolean = false; // TODO: make adding and removing from favs w/o special flag
  constructor(private favServ: FavouritesServiceService, private dataTransfer: TransferItemDataService) {
  }

  ngOnInit() {
  }

  addRemoveFav() {
    this.favServ.addRemoveFromFavs(this.blogItemData);
  }

  addToFavs() {
    this.favServ.addFavourites(this.blogItemData);
  }

  removeFromFavs() {
    this.favServ.removeFavourites(this.blogItemData);
  }

  setData() {
    this.dataTransfer.setItem(this.blogItemData);
  }
}
