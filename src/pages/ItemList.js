import React from "react";
import '../assets/styles/search.css';
import '../assets/styles/results.css';
import Navbar from "../components/Navbar";

export default function ItemList() {
  return (
    <>
      <Navbar/>
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
