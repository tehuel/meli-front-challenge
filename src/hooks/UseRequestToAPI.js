import {useEffect, useState} from "react";

export default function useRequestToAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let unmounted = false;

    const fetchData = async () => {
      if (url) {
        setIsError(false);
        setIsLoading(true);
        const encodedUrl = encodeURI(url);
        try {
          const response = await fetch(encodedUrl);
          const responseData = await response.json()
          if (!unmounted) {
            setData(responseData);
          }
        } catch (e) {
          console.error("Error en el request", e);
          if (!unmounted) {
            setIsError(true);
          }
        }
        if (!unmounted) {
          setIsLoading(false);
        }
      }
    };
    fetchData();

    // set internal flag when component is unmounted
    return () => {
      unmounted = true;
    };
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}