import PickOneButton from '@/components/pickOneButton';
import AnimeService from '@/services/animeService';
import HistoryService from '@/services/historyService';

export default async function Page() {
  const { data } = await AnimeService.getRandom();
  await HistoryService.writeItem({
    images: data.images,
    mal_id: data.mal_id,
    title: data.title,
  });

  return (
    <main>
      <PickOneButton>Next</PickOneButton>
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}
