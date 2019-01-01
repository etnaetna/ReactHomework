declare var require: any;

const json = require('../../assets/posts.json');

import { Component, OnInit, DoCheck } from '@angular/core';
import { BlogItem } from './../BlogItem';
import { bloomAdd } from '@angular/core/src/render3/di';
import { ContentProviderService } from './../content-provider.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, DoCheck {
  blogData: BlogItem[] = null;

  constructor(private contentSrv: ContentProviderService) {
    console.log(this.blogData);
  }

  ngOnInit() {
    this.getContent();
    console.log(this.blogData);
  }

  ngDoCheck() {
    this.getContent();
  }

  getContent(): void {
    console.log(this.blogData);
    this.contentSrv.getContent()
      .subscribe((data) => {
        this.blogData = data;
      }
      );
  }
}
