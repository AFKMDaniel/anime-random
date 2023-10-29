'use client';

import AnimeService from '@/services/animeService';
import HistoryService from '@/services/historyService';
import useFetching from '@/hooks/useFetching';

export default function Page() {
  const [data, isLoading, error] = useFetching(async () => {
    const { data } = await AnimeService.getRandom();
    await HistoryService.writeItem({
      images: data.images,
      mal_id: data.mal_id,
      title: data.title,
    });
    return Promise.resolve({ data });
  });

  if (isLoading)
    return (
      <main>
        <div>Загрузка</div>
      </main>
    );

  if (error)
    return (
      <main>
        <div>Ошибка</div>
      </main>
    );

  return (
    <main>
      <div>{JSON.stringify(data?.data)}</div>
    </main>
  );
}
