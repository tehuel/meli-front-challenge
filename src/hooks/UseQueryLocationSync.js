import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export function useQueryLocationSync() {
  let location = useLocation();
  const [query, setQuery] = useState("");
  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('search')
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location]);
  return [query, setQuery]
}