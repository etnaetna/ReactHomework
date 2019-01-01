import { Component, OnInit, Input } from '@angular/core';
import { BlogItem } from './../BlogItem';
import { TransferItemDataService } from './../transfer-item-data.service';

@Component({
  selector: 'app-blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  @Input() blogItemData: BlogItem;

  constructor(private dataGetter: TransferItemDataService) { }

  ngOnInit() {
    this.blogItemData = this.dataGetter.getItem();
    console.log(this.blogItemData);
  }

}
