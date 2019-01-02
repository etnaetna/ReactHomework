import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { BlogItem } from './../BlogItem';
import { TransferItemDataService } from '../transfer-item-data.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {
  @Input() blogItemData: BlogItem;
  @ViewChild('ratingBar') ratingBar;

  constructor(private dataTrans: TransferItemDataService) {
  }

  ngOnInit() {
    const ratingStars = this.ratingBar.nativeElement.children;

    for (let i = 0; i < ratingStars.length; i++) {
      if (i < this.blogItemData.usrCurrVote) {
        ratingStars[i].classList.add('checked');
      } else {
        ratingStars[i].classList.remove('checked');
      }
    }

  }

  refreshStars(e) {
    const ratingBar = e.target.children;

    for (let i = 0; i < ratingBar.length; i++) {
      if (i < this.blogItemData.usrCurrVote) {
        ratingBar[i].classList.add('checked');
      } else {
        ratingBar[i].classList.remove('checked');
      }
    }
  }

  onHover(e): void {
    const id = e.target.getAttribute('data-star-id');

    const ratingBar = e.target.parentElement.children;

    for (let i = 0; i < ratingBar.length; i++) {
      if (i < +id) {
        ratingBar[i].classList.add('checked');
      } else {
        ratingBar[i].classList.remove('checked');
      }
    }
  }

  getVote(e): void {
    const starId = e.target.getAttribute('data-star-id');
    this.blogItemData.usrCurrVote = starId;
    this.dataTrans.setItem(this.blogItemData);
  }
}
