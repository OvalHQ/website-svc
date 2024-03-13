export interface IArticleResponse {
  status: string;
  feed: Feed;
  items?: IArticle[] | null;
}
export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}
export interface IArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Enclosure;
  categories?: null[] | null;
}
export interface Enclosure {}
