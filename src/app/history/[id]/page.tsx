import AnimeService from '@/services/animeService';

export default async function Page({ params }: { params: { id: number } }) {
  const {data} = await AnimeService.getById(params.id);

  return (
    <main>
      <div>{JSON.stringify(data)}</div>;
    </main>
  );
}
