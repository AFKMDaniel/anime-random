'use client'

import HistoryService from '@/services/historyService';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['history'],
    queryFn: HistoryService.getList,
  });

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
      {data!.map((anime) => (
        <div key={anime.mal_id} className='pb-5'>
          {JSON.stringify(anime)} <hr />
        </div>
      ))}
    </main>
  );
}
