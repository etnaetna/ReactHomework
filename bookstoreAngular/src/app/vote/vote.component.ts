import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent implements OnInit {
  @Input() rating: number;
  noviGlas: Number = null;
  petBrojeva: Number[] = [1, 2, 3, 4, 5];


  constructor() { }

  ngOnInit() {
  }

  refreshStars(e) {

    const ratingBar = e.target.children;

    for (let i = 0; i < ratingBar.length; i++) {
      if (i < this.noviGlas) {
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
    console.log('get vote');
    const starId = e.target.getAttribute('data-star-id');
    console.log(e.target.parentElement.children);
    this.noviGlas = starId;
    console.log(this.noviGlas);
  }
}
