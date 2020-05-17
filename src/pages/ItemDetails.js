import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import useRequestToAPI from "../hooks/UseRequestToAPI";
import formatPrice from "../filters/FormatPrice";

import Alert from "../components/Alert";
import Breadcrumb from "../components/Breadcrumb";

import "../assets/styles/ItemDetails.scss";
import "../assets/styles/Product.scss";

export default function ItemDetails() {
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

  if (isLoading || !item) {
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

  const formattedItemPrice = formatPrice(item.price);
  return (
    <div className="container">
      <Breadcrumb categories={item.categories}/>
      <div className="page-container">
        <div className="row">
          <div className="col-75">
            <img src={item.picture} alt={item.title} className="product-image"/>
          </div>
          <div className="col-25">
            <div className="product-details-sidebar">
              <p>Nuevo | 999 Vendidos</p>
              <h2 className="product-title">{item.title}</h2>
              <p className="product-price-large">{ formattedItemPrice }</p>
              <a href="#" className="product-buy-button">Comprar Ahora</a>
            </div>
          </div>
        </div>
        <div className="details">
          <h2>Descripción del Producto</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}
