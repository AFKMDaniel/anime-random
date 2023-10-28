'use client';

import React from 'react';
import FilledButtonLink from './UI/filledButtonLink';
import ButtonLink from './UI/buttonLink';
import Image from 'next/image';
import Button from './UI/button';
import { signIn, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export default function StartBlock() {
  const session = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='bg-rose-600/80 py-6 px-2 sm:px-4 text-center rounded text-white text-lg'>
        {session.status !== 'loading' ? (
          <>
            <h1 className='text-5xl font-black'>AnimeRandom</h1>
            <p className='mt-8 mb-9'>
              Nothing to watch? Pick up a random anime! <br />
            </p>
            <FilledButtonLink className='-ml-2 mr-2' href='#'>
              PICK ONE!
            </FilledButtonLink>
            {session.status === 'unauthenticated' ? (
              <Button
                className='relative'
                onClick={() => signIn('google', { callbackUrl })}
              >
                <Image
                  src='https://authjs.dev/img/providers/google.svg'
                  alt='G'
                  width={24}
                  height={24}
                  className='absolute'
                />
                <span className='ml-8'>SIGN IN</span>
              </Button>
            ) : (
              <ButtonLink href='/history'>CHECK HISTORY</ButtonLink>
            )}
          </>
        ) : (
          <div className='flex items-center justify-center sm:h-[172px] sm:w-[394px] w-[377px] h-[200px]'>
            <div className='bg-white p-2 m-1 w-4 h-4 rounded-full animate-bounce'></div>
            <div className='bg-white p-2 m-1 w-4 h-4 rounded-full animate-bounce anim-delay-100'></div>
            <div className='bg-white p-2 m-1 w-4 h-4 rounded-full animate-bounce anim-delay-200'></div>
          </div>
        )}
      </div>
    </main>
  );
}
