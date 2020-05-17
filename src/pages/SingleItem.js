import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import useRequestToAPI from "../hooks/UseRequestToAPI";
import Alert from "../components/Alert";
import Breadcrumb from "../components/Breadcrumb";

export default function SingleItem() {
  const { id } = useParams();
  const [{ data, isLoading, isError }, doFetch] = useRequestToAPI();
  const [item, setItem] = useState(null);

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
        <div className="page-container">
          <Alert>
            <p>Error!</p>
            <p>:(</p>
          </Alert>
          <p>
            <Link to="/">Volver al Inicio</Link>
          </p>
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

  if (!item) {
    return (
      <div className="container">
        <div className="page-container">
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Breadcrumb categories={item.categories}/>
      <div className="page-container">
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
