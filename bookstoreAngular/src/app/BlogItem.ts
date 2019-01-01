import { Review } from './Review';

export class BlogItem {
  title: String;
  imageSrc: String;
  content: String;
  totalRating: number;
  voteCount: number;
  reviews: Review[];
}
