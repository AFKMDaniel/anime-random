import { Document } from 'mongoose';

interface IHistoryItem {
  email: string;
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  title: string;
}

export interface IHistoryDocument extends IHistoryItem, Document {}

export interface IHistoryBody extends Omit<IHistoryItem, 'email'> {}
