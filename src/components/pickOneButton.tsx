'use client';

import React from 'react';
import FilledButton from './UI/filledButton';
import { revalidateRandom } from '@/app/actions';
import { useRouter } from 'next/navigation';

export default function PickOneButton({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  return (
    <FilledButton className={className}
      onClick={async () => {
        revalidateRandom();
        router.push('/random');
      }}
    >
      {children}
    </FilledButton>
  );
}
