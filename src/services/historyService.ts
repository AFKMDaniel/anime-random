import { IHistoryBody } from '@/types/historyTypes';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';

const APP_URL = process.env.APP_URL || '';

export default class HistoryService {
  static async getList(headers?: ReadonlyHeaders): Promise<IHistoryBody[]> {
    const response = await fetch(APP_URL + '/api/history', {
      headers: headers || {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  static async writeItem(
    historyBody: IHistoryBody
  ): Promise<{ message: string }> {
    const response = await fetch(APP_URL + '/api/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(historyBody),
    });
    if (!response.ok && response.status !== 401) throw new Error('fetch error');
    return response.json();
  }
}
