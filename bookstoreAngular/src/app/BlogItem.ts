import { Review } from './Review';

export class BlogItem {
  title: String;
  imageSrc: String;
  content: String;
  totalRating: number;
  usrCurrVote: number;
  usrVoted: Boolean = false;
  lastVote: Number = 0;
  voteCount: number;
  reviews: Review[];
}
