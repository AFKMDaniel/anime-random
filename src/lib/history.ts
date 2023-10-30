import { IHistoryDocument, IHistoryBody } from "@/types/historyTypes";
import { getServerSession } from "next-auth";
import dbConnect from "./dbConnect";
import HistoryItem from "@/models/historyItem";


export async function getList(email: string) {
    await dbConnect();

    const data: IHistoryDocument[] = await HistoryItem.find({
      email,
    }).sort({createdAt: 'desc'});

    const result: IHistoryBody[] = data.map(({ title, images, mal_id }) => {
      return {
        title,
        images,
        mal_id,
      };
    });
    return result;
  }

  export async function writeItem(email: string, data: IHistoryBody): Promise<void> {
    await dbConnect();

    const historyItem: IHistoryDocument = new HistoryItem({
      email,
      mal_id: data.mal_id,
      title: data.title,
      images: data.images,
    });

    await historyItem.save();
  }