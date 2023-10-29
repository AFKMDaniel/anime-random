import mongoose from 'mongoose';
import { IHistoryDocument } from '@/types/historyTypes';

const HistoryItemSchema = new mongoose.Schema<IHistoryDocument>(
  {
    email: {
      type: String,
      required: [true, 'email is required'],
    },
    mal_id: {
      type: Number,
      required: [true, 'mal_id is required'],
    },
    title: { type: String, required: [true, 'title is required'] },
    images: {
      jpg: {
        image_url: { type: String },
        small_image_url: { type: String },
        large_image_url: { type: String },
      },
      webp: {
        image_url: { type: String },
        small_image_url: { type: String },
        large_image_url: { type: String },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.HistoryItem ||
  mongoose.model<IHistoryDocument>('HistoryItem', HistoryItemSchema);
