import React from "react";
import '../assets/styles/search.css';
import logo from "../assets/img/logo.svg";

export default function Search() {
  return (
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
  );
}
