import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

// Get and updates 'search' query param from app URL, and saves it in local state.
// Exposes this local state value and setter.
export function useSearchQueryParam() {
  let location = useLocation();
  const [query, setQuery] = useState("");
  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('search')
    setQuery(searchQuery || "");
  }, [location]);
  return [query]
}