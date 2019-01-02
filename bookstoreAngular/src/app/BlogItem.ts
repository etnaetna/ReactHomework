import { Review } from './Review';

export class BlogItem {
  title: String;
  imageSrc: String;
  content: String;
  totalRating: number;
  usrCurrVote: number;
  usrVoted: boolean;
  lastVote: number;
  voteCount: number;
  reviews: Review[];
}
