import React, {useEffect, useState} from "react";
import useSearchQueryParam from "../hooks/UseSearchQueryParam";
import useRequestToAPI from "../hooks/UseRequestToAPI";

import ItemComponent from "../components/ItemComponent";
import Alert from "../components/Alert";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query] = useSearchQueryParam();
  const [{ data, isLoading, isError }, doFetch] = useRequestToAPI();

  useEffect(() => {
    if (query) {
      const searchUrl = '/api/items?search=' + query;
      doFetch(searchUrl);
    }
  }, [doFetch, query])

  useEffect(() => {
    if (data) {
      setItems(data.items);
      setCategories(data.categories);
    }
  }, [data])

  if (isError) {
    return (
      <div className="container">
        <div className="page-container">
          <Alert>
            <p>Error!</p>
            <p>:(</p>
          </Alert>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="page-container">
          <Alert>
            <p>Cargando...</p>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="breadcrumb">
        {JSON.stringify(categories)}
      </div>
      <div className="page-container">
        { items.map(item => <ItemComponent key={item.id} item={item}/>) }
      </div>
    </div>
  );
}
