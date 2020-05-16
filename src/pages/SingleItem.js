import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SingleItem() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState({});
  useEffect(() => {
    console.log("aca ejecuto el request a la API", id);
    const fetchItem = async () => {
      if (id) {
        setIsLoading(true);
        const itemUrl = encodeURI('/api/items/' + id)
        const itemResponse = await fetch(itemUrl);
        const itemData = await itemResponse.json();
        console.log(itemData);
        setItem(itemData.item);
        setIsLoading(false);
      }
    };
    fetchItem();
  }, [id])
  
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
    <>
      <Navbar/>
      <div>
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
      </div>
    </>
  );
}
