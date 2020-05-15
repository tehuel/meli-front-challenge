import React from "react";
import logo from "../assets/img/logo.svg";

import '../assets/styles/search.css';
import '../assets/styles/results.css';

export default function ItemList() {
  return (
    <>
      <nav className="main-navbar">
        <div className="container navbar-container">
          <div className="logo">
            <img src={logo} alt="Mercado Libre"/>
          </div>
          <div className="search-form">
            <input type="text" id="search-query" name="search-query" required/>
            <button>Buscar</button>
          </div>
        </div>
      </nav>
      <div>
        <div className="container">
          <div className="breadcrumb">
            aaa | aaa | aaa
          </div>
          <div className="search-results">
            <div className="item">
              <img src="https://picsum.photos/300" alt=""/>
              <div className="content">
                <p>$ 999</p>
                <h2>Nombre del producto</h2>
              </div>
            </div>
            <div className="item">
              <img src="https://picsum.photos/300" alt=""/>
              <div className="content">
                <p>$ 999</p>
                <h2>Nombre del producto</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
