import { Component, OnInit, Input } from '@angular/core';
import { BlogItem } from './../BlogItem';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input() blogItemData: BlogItem;
  constructor() {
  }

  ngOnInit() {
  }

}
