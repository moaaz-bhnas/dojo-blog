import { useCallback, useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (abortController) => {
      try {
        const res = await fetch(url, { signal: abortController.signal });
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }

        const data = await res.json();
        setData(data);
        setError(null);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
          setLoading(false);
        }
      }
    },
    [url]
  );

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController);

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}
