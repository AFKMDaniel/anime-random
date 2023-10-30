import { writeItem, getList } from '@/lib/history';
import { IHistoryBody } from '@/types/historyTypes';
import { getServerSession } from 'next-auth/next';
import { revalidatePath } from 'next/cache';

export async function GET() {
  const session = await getServerSession();
  if (!session)
    return Response.json({ message: 'not authorized' }, { status: 401 });

  const data = await getList(session.user?.email!);
  return Response.json(data);
}

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) throw new Error('not authorized');

  const data: IHistoryBody = await req.json();
  if (!data?.mal_id || !data?.title) throw new Error('data is missing');

  await writeItem(session.user?.email!, data);

  return Response.json({ message: 'success' }, { status: 200 });
}
