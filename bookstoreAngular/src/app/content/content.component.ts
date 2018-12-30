declare var require: any;

const json = require('../../assets/posts.json');

import { Component, OnInit } from '@angular/core';
import { BlogItem } from './../BlogItem';
import { bloomAdd } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  blogData: BlogItem[] = json;

  constructor() {
    console.log(this.blogData);
  }

  ngOnInit() { }
}
