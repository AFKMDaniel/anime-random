import dbConnect from '@/lib/dbConnect';
import HistoryItem from '@/models/historyItem';
import { IHistoryBody, IHistoryDocument } from '@/types/historyTypes';
import { getServerSession } from 'next-auth/next';

export default class HistoryService {
  static async getList() {
    await dbConnect();

    const session = await getServerSession();
    if (!session) throw new Error('not authorized');

    const data: IHistoryDocument[] = await HistoryItem.find({
      email: session?.user?.email,
    });

    const result: IHistoryBody[] = data.map(({ title, images, mal_id }) => {
      return {
        title,
        images,
        mal_id,
      };
    });
    return result;
  }

  static async writeItem(data: IHistoryBody): Promise<void> {
    await dbConnect();

    const session = await getServerSession();
    if (!session) return;

    const historyItem: IHistoryDocument = new HistoryItem({
      email: session?.user?.email!,
      mal_id: data.mal_id,
      title: data.title,
      images: data.images,
    });

    await historyItem.save();
  }
}
