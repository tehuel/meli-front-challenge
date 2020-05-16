import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import "../assets/styles/Navbar.scss";

function useLocationSynchronization() {
  let location = useLocation();
  const [query, setQuery] = useState("");
  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('search')
    if(searchQuery) {
      setQuery(searchQuery);
    }
  }, [location]);
  return [query, setQuery]
}

export default function Navbar(props) {
  let history = useHistory();
  const [query] = useLocationSynchronization();
  const [formQuery, setFormQuery] = useState(query);

  useEffect(() => {
    console.log("formQuery cambiado!", formQuery);
  }, [formQuery]);

  useEffect(() => {
    console.log("query cambiado!", query);
    setFormQuery(query);
  }, [query]);

  function handleClick(e) {
    e.preventDefault();
    history.push("/items?search=" + formQuery);
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
          <input type="text" id="search-query" name="search-query" required value={formQuery} onChange={e => setFormQuery(e.target.value)}/>
          <button onClick={handleClick}>Buscar</button>
        </div>
      </div>
    </nav>
  )
}