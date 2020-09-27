import { IFeaturedImage } from './IFeaturedImage.interface';
/* eslint-disable camelcase */
export interface IWpPost {
  id: number;
  date: Date;
  title: IRenderedType;
  content: IRenderedType;
  author: number;
  featured_media: number;
  categories: number[];
  tags: string[];
  yoast_head: string;
  _embedded: IWpEmbbed;
}

export interface IRenderedType {
  rendered: string;
}

export interface IWpEmbbed {
  author: IWpAuthor;
  'wp:featuredmedia': IFeaturedImage[];
  'wp:term': IWpTags[][];
}

export interface IWpAuthor {
  id: number;
  name: string;
}

export interface IWpTags {
  id: number;
  name: string;
}
