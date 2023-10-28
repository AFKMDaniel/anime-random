'use client';

import AnimeService from '@/services/animeService';
import useFetching from '../hooks/useFetching';

export default function Page() {
  const [data, isLoading, error] = useFetching(AnimeService.getRandom);

  if (isLoading)
    return (
      <main>
        <div>Загрузка</div>;
      </main>
    );

  return (
    <main>
      <div>{JSON.stringify(data?.data)}</div>;
    </main>
  );
}
