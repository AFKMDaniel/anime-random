'use client';

import Button from './UI/button';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  return (
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
  );
}
