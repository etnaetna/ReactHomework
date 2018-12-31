import { Component, OnInit, DoCheck } from '@angular/core';
import { FavouritesServiceService } from './../favourites-service.service';
import { BlogItem } from './../BlogItem';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit, DoCheck {

  favoriti: BlogItem[] = new Array;

  constructor(private favServ: FavouritesServiceService) {
  }

  ngOnInit() {
    this.getFavs();
  }

  sranje() {
    console.log(this.favoriti);
    this.getFavs();
  }

  ngDoCheck() {
    this.getFavs();
  }

  getFavs(): void {
    console.log(this.favoriti);
    this.favServ.getFavourites()
      .subscribe((favoriti) => {
        this.favoriti = favoriti;
      }
      );
  }

}
