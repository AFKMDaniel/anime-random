'use server'

import { revalidateTag } from 'next/cache';

export async function revalidateRandom() {
  revalidateTag('random');
}
