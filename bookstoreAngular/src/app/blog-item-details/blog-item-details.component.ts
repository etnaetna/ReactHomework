import { Component, OnInit, Input } from '@angular/core';
import { BlogItem } from './../BlogItem';
import { TransferItemDataService } from './../transfer-item-data.service';
import { FavouritesServiceService } from './../favourites-service.service';

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  @Input() blogItemData: BlogItem;

  constructor(private favServ: FavouritesServiceService, private dataTransfer: TransferItemDataService) { }

  ngOnInit() {
    this.blogItemData = this.dataTransfer.getItem();
  }

  addRemoveFav() {
    this.favServ.addRemoveFromFavs(this.blogItemData);
  }
}
