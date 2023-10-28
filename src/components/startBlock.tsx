'use client';

import React from 'react';
import FilledButtonLink from './UI/filledButtonLink';
import ButtonLink from './UI/buttonLink';
import Image from 'next/image';
import Button from './UI/button';
import { signIn, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function StartBlock() {
  const session = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
    <main className='flex justify-center items-center h-screen w-screen'>
      <div className='bg-rose-600/80 h-60 sm:max-w-md w-full text-center rounded text-white text-lg'>
        {session.status !== 'loading' ? (
          <div className=' flex flex-col justify-around h-full'>
            <h1 className='text-5xl font-black'>AnimeRandom</h1>
            <p>
              Nothing to watch? Pick up a random anime! <br />
            </p>
            <div>
              <FilledButtonLink className='-ml-2 mr-2' href='/random'>
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
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center h-full'>
            <div className='bg-white p-2 m-1 w-4 h-4 rounded-full animate-bounce'></div>
            <div className='bg-white p-2 m-1 w-4 h-4 rounded-full animate-bounce anim-delay-100'></div>
            <div className='bg-white p-2 m-1 w-4 h-4 rounded-full animate-bounce anim-delay-200'></div>
          </div>
        )}
      </div>
    </main>
  );
}
