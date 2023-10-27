import ButtonLink from '@/components/UI/buttonLink';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='bg-rose-600/80 py-4 sm:px-4 px-2 text-center rounded text-white text-lg'>
        <h1 className='md:text-6xl text-5xl font-black border-green-600 border-b-4'>
          AnimeRandom
        </h1>
        <p className='my-6'>
          Nothing to watch? Pick up a random anime! <br/>
          <Link className='text-base underline mt-1 text-orange-300' href='#'>Sign in to see history</Link>
        </p>
        <ButtonLink href='#'>PICK ONE!</ButtonLink>
      </div>
    </main>
  );
}
