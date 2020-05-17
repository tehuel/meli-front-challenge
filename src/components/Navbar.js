import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useSearchQueryParam from "../hooks/UseSearchQueryParam";

import logo from "../assets/img/logo.svg";
import searchIcon from "../assets/img/search.svg";
import "../assets/styles/Navbar.scss";

export default function Navbar(props) {
  let history = useHistory();
  const [query] = useSearchQueryParam();
  const [formQuery, setFormQuery] = useState(query);

  useEffect(() => {
    setFormQuery(query);
  }, [query]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formQuery) {
      history.push("/items?search=" + formQuery);
    }
  }

  return (
    <nav className="main-navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mercado Libre" />
          </Link>
        </div>
        <form className="search-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="search-query"
            name="search-query"
            autoFocus="autoFocus"
            value={formQuery}
            onChange={(e) => setFormQuery(e.target.value)}
            placeholder="Nunca dejes de buscar..."
          />
          <button type="submit">
            <img src={searchIcon} alt="Buscar" className="icon" />
          </button>
        </form>
      </div>
    </nav>
  );
}
