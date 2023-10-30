import { IHistoryBody } from '@/types/historyTypes';

export default class HistoryService {
  static async getList(): Promise<IHistoryBody[]> {
    const response = await fetch('/api/history', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  static async writeItem(data: IHistoryBody): Promise<{ message: string }> {
    const response = await fetch('/api/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
