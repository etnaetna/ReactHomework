import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() revData: Review = null;
  constructor() { }

  ngOnInit() {
  }

}
