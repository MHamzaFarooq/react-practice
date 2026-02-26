import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const abort = new AbortController();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, { signal: abort.signal });
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
    return () => {
      abort.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
}

export default useFetch;
