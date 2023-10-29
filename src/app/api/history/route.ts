import dbConnect from '@/lib/dbConnect';
import HistoryItem from '@/models/historyItem';
import { IHistoryBody, IHistoryDocument } from '@/types/historyTypes';
import { getServerSession } from 'next-auth/next';

export async function GET() {
  await dbConnect();

  const session = await getServerSession();
  if (!session) return Response.json({message: 'not authenticated'}, { status: 401 });

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
  return Response.json(result, { status: 200 });
}

export async function POST(request: Request) {
  await dbConnect();

  const session = await getServerSession();
  if (!session) return Response.json({message: 'not authenticated'}, { status: 401 });

  const data: IHistoryBody = await request.json();
  if (!data?.mal_id || !data?.title)
    return Response.json({message: 'data missing'}, { status: 400 });

  const historyItem: IHistoryDocument = new HistoryItem({
    email: session?.user?.email!,
    mal_id: data.mal_id,
    title: data.title,
    images: data.images,
  });

  await historyItem.save();
  return Response.json({ message: 'success' }, { status: 200 });
}
