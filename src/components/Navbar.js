import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mercado Libre"/>
          </Link>
        </div>
        <div className="search-form">
          <input type="text" id="search-query" name="search-query" required/>
          <button>Buscar</button>
        </div>
      </div>
    </nav>
  )
}