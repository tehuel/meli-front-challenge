import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import useRequestToAPI from "../hooks/UseRequestToAPI";

export default function SingleItem() {
  const { id } = useParams();
  const [{ data, isLoading, isError }, doFetch] = useRequestToAPI();
  const [item, setItem] = useState({});

  useEffect(() => {
    const searchUrl = '/api/items/' + id;
    doFetch(searchUrl);
  }, [doFetch, id])

  useEffect(() => {
    if (data) {
      setItem(data.item);
    }
  }, [data])

  if (isError) {
    return (
      <div className="container">
        <div className="search-results">
          <p>Error!</p>
          <p>:(</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="search-results">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="breadcrumb">
        aaa | aaa | aaa
      </div>
      <div className="search-results">
        <div className="row">
          <img src={item.picture} alt={item.title}/>
          <div className="content">
            <p>Nuevo | 999 Vendidos</p>
            <h2>{item.title}</h2>
            <p>$ 999</p>
            <a href="#">Comprar</a>
          </div>
        </div>
        <div className="row details">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}
