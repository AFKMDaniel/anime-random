'use client';

import AnimeService from '@/services/animeService';
import useFetching from '@/hooks/useFetching';
import HistoryService from '@/services/historyService';
import FilledButton from '@/components/UI/filledButton';
import { useState } from 'react';

export default function Page() {
  const [flag, setFlag] = useState<boolean>(false);

  const [data, isLoading, error] = useFetching(async () => {
    const { data } = await AnimeService.getRandom();
    await HistoryService.writeItem({
      images: data.images,
      title: data.title,
      mal_id: data.mal_id,
    });
    return Promise.resolve({ data });
  }, [flag]);

  if (isLoading)
    return (
      <main>
        <div>Loading...</div>
      </main>
    );

  if (error)
    return (
      <main>
        <div>Error</div>
      </main>
    );

  return (
    <main>
      <FilledButton onClick={() => setFlag((flag) => !flag)}>Next</FilledButton>
      <div>{JSON.stringify(data?.data)}</div>
    </main>
  );
}
