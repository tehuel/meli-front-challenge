import React from "react";
import {Link} from "react-router-dom";

export default function ItemComponent({ item }) {
  return <div className="item">
    <Link to={`/items/${item.id}`}>
      <img src={item.picture} alt={item.title}/>
    </Link>
    <div className="content">
      <p>$ 999</p>
      <h2>{item.title}</h2>
    </div>
  </div>;
}