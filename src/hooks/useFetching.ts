'use client';

import { useState, useEffect } from 'react';

export default function useFetching<T>(callback: () => Promise<T>, deps: unknown[] = []): [T | null, boolean, unknown] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await callback();
      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [data, isLoading, error];
}