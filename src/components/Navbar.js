import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useSearchQueryParam} from "../hooks/UseSearchQueryParam";

import logo from "../assets/img/logo.svg";
import "../assets/styles/Navbar.scss";

export default function Navbar(props) {
  let history = useHistory();
  const [query] = useSearchQueryParam();
  const [formQuery, setFormQuery] = useState(query);

  useEffect(() => {
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