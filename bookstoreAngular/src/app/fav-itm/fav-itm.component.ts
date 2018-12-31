import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fav-itm',
  templateUrl: './fav-itm.component.html',
  styleUrls: ['./fav-itm.component.css']
})
export class FavItmComponent implements OnInit {
  @Input() imgSrc: String = null;
  @Input() title: String = null;

  constructor() { }

  ngOnInit() {
  }

}
