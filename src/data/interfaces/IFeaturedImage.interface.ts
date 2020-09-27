/* eslint-disable camelcase */
import { IRenderedType } from './IWpPost.interface';

export interface IFeaturedImage {
  id: number;
  date: Date;
  guid: IRenderedType;
  yoast_head: string;
  media_details: IMediaDetails;
}

export interface IMediaDetails {
  width: number;
  height: number;
  file: string;
  sizes: {
    thumbnail: IMediaDetailsSize;
    full: IMediaDetailsSize;
    medium?: IMediaDetailsSize;
    medium_large?: IMediaDetailsSize;
    large?: IMediaDetailsSize;
    '1536x1536'?: IMediaDetailsSize;
    '2048x2048'?: IMediaDetailsSize;
    'post-thumbnail'?: IMediaDetailsSize;
  };
}

export interface IMediaDetailsSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}
