import { IAnime } from '@/types/animeTypes';

export default class AnimeService {
  static async getRandom(): Promise<IAnime> {
    const response = await fetch('https://api.jikan.moe/v4/random/anime', {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'no-store',
    });
    if (!response.ok) throw new Error('fetch error');
    return response.json();
  }

  static async getById(id: number): Promise<IAnime> {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });
    return response.json();
  }
}
