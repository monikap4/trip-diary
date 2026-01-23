import { useEffect, useState } from 'react';

export const useFetch = <Data>(loadData: () => Promise<Data>) => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const result = await loadData();
        setData(result);
      } catch {
        setError('Nepodařilo se načíst data.');
      } finally {
        setLoading(false);
      }
    };

    fetchedData();
  }, [loadData]);

  return { data, loading, error };
};
