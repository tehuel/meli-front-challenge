import React, {useEffect, useState} from "react";
import {useSearchQueryParam} from "../hooks/UseSearchQueryParam";
import Navbar from "../components/Navbar";
import ItemComponent from "../components/ItemComponent";

import '../assets/styles/search.css';
import '../assets/styles/results.css';

export default function ItemList() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query] = useSearchQueryParam();

  useEffect(() => {
    const fetchSearch = async () => {
      if (query) {
        const searchUrl = encodeURI('/api/items?search=' + query)
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();
        setItems(searchData.items)
        setCategories(searchData.categories)
      }
    };
    fetchSearch();
  }, [query])

  return <>
    <Navbar/>
    <div>
      <div className="container">
        <div className="breadcrumb">
          {JSON.stringify(categories)}
        </div>
        <div className="search-results">
          {
            items.map(item => <ItemComponent key={item.id} item={item}/>)
          }
        </div>
      </div>
    </div>
  </>;
}
