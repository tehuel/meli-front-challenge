import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import "../assets/styles/Navbar.scss";

export default function Navbar() {
  const [query, setQuery] = useState('');
  let history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    console.log('Busqueda iniciada', query);
    history.push("/items?search=" + query);
  }

  return (
    <nav className="main-navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mercado Libre"/>
          </Link>
        </div>
        <div className="search-form">
          <input type="text" id="search-query" name="search-query" required value={query} onChange={e => setQuery(e.target.value)}/>
          <button onClick={handleClick}>Buscar</button>
        </div>
      </div>
    </nav>
  )
}