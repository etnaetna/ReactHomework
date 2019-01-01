import { Injectable } from '@angular/core';
import { BlogItem } from './BlogItem';
import { bloomAdd } from '@angular/core/src/render3/di';

@Injectable({
  providedIn: 'root'
})
export class TransferItemDataService {
  itemData: BlogItem = null;
  constructor() { }

  setItem(data: BlogItem) {
    this.itemData = data;
  }

  getItem() {
    return this.itemData;
  }
}
