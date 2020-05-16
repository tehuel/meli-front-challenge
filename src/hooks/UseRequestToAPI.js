import {useEffect, useState} from "react";

export default function useRequestToAPI() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (url) {
        setIsError(false);
        setIsLoading(true);
        const encodedUrl = encodeURI(url);
        try {
          console.log("lanzando request", encodedUrl);
          const response = await fetch(encodedUrl);
          const responseData = await response.json()
          console.info(responseData);
          setData(responseData);
        } catch (e) {
          console.error("Error en el request", e);
          setIsError(true);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}