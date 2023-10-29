import React from 'react';
import FilledButtonLink from './UI/filledButtonLink';
import ButtonLink from './UI/buttonLink';
import SignInButton from './signInButton';
import { getServerSession } from 'next-auth/next';

export default async function StartBlock() {
  const session = await getServerSession();

  return (
    <main className='flex justify-center items-center h-screen w-screen'>
      <div className='bg-rose-600/80 h-60 sm:max-w-md w-full text-center rounded text-white text-lg'>
        <div className=' flex flex-col justify-around h-full'>
          <h1 className='text-5xl font-black'>AnimeRandom</h1>
          <p>
            Nothing to watch? Pick up a random anime! <br />
          </p>
          <div>
            <FilledButtonLink className='-ml-2 mr-2' href='/random'>
              PICK ONE!
            </FilledButtonLink>
            {!session ? (
              <SignInButton />
            ) : (
              <ButtonLink href='/history'>CHECK HISTORY</ButtonLink>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
