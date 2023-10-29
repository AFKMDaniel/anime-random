import HistoryService from "@/services/historyService";

export default async function Page() {
  const data = await HistoryService.getList();

  return (
    <main>
      {data.map((anime) => (
        <div key={anime.mal_id} className='pb-5'>
          {JSON.stringify(anime)} <hr />
        </div>
      ))}
    </main>
  );
}
