import { IWaifuList } from '@/types/waifuTypes';

export default class WaifuService {
  static async getList(): Promise<IWaifuList> {
    const response = await fetch('https://api.waifu.pics/many/sfw/dance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'cors',
      body: JSON.stringify({}),
      next: { revalidate: 600 }
    });
    return response.json();
  }
}
