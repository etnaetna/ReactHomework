import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {
  @Input() rating: number;
  usrCurrVote: Number = null;

  constructor() { }

  ngOnInit() {
  }

  refreshStars(e) {
    const ratingBar = e.target.children;

    for (let i = 0; i < ratingBar.length; i++) {
      if (i < this.usrCurrVote) {
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
    this.usrCurrVote = starId;
  }
}
