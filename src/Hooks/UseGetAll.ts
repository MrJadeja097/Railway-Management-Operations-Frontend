import { useCallback, useEffect, useState } from "react";

export function useFetchAll<T>(fetchFn: () => Promise<T[]>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchFn();
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { data, loading, fetchAll };
}
