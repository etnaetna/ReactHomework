import { Component, OnInit, DoCheck } from '@angular/core';
import { FavouritesServiceService } from './../favourites-service.service';
import { BlogItem } from './../BlogItem';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit, DoCheck {

  favourites: BlogItem[] = new Array;

  constructor(private favServ: FavouritesServiceService) {
  }

  ngOnInit() {
    this.getFavs();
  }

  ngDoCheck() {
    this.getFavs();
  }

  getFavs(): void {
    this.favServ.getFavourites()
      .subscribe((favoriti) => {
        this.favourites = favoriti;
      }
      );
  }

}
