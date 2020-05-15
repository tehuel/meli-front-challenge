import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SingleItem() {
  let { id } = useParams();
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
              <img src="https://picsum.photos/300" alt=""/>
              <div className="content">
                <p>Nuevo | 999 Vendidos</p>
                <h2>ID: { id }</h2>
                <p>$ 999</p>
                <a href="#">Comprar</a>
              </div>
            </div>
            <div className="row details">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam deserunt dicta dolor dolorem eligendi esse et exercitationem illum, incidunt, inventore ipsa labore minus nam neque porro recusandae ut voluptatum.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
