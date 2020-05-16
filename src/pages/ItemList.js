import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../assets/styles/search.css';
import '../assets/styles/results.css';
import Navbar from "../components/Navbar";
import {useQueryLocationSync} from "../hooks/UseQueryLocationSync";

export default function ItemList() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query] = useQueryLocationSync();

  useEffect(() => {
    console.log("aca ejecuto el request a la API", query);
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

  return (
    <>
      <Navbar/>
      <div>
        <div className="container">
          <div className="breadcrumb">
            {JSON.stringify(categories)}
          </div>
          <div className="search-results">
            {
              items.map(item => { return (
                <div className="item" key={item.id}>
                  <Link to={`/items/${item.id}`}>
                    <img src={item.picture} alt={item.title}/>
                  </Link>
                  <div className="content">
                    <p>$ 999</p>
                    <h2>{item.title}</h2>
                  </div>
                </div>

              )})
            }
          </div>
        </div>
      </div>
    </>
  );
}
