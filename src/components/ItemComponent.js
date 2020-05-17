import React from "react";
import { Link } from "react-router-dom";
import formatPrice from "../filters/FormatPrice";

export default function ItemComponent({ item }) {
  const formattedItemPrice = formatPrice(item.price);
  return (
    <div className="item">
      <img src={item.picture} alt={item.title} />
      <div className="item-content">
        <Link to={`/items/${item.id}`} className="stretched-link">
          <div className="product-information">
            <p className="product-price">{formattedItemPrice}</p>
            <p className="product-shipping">
              {item.free_shipping ? "Envio Gratis" : ""}
            </p>
            <p className="product-condition">
              {item.condition === "new" ? "Nuevo" : "Usado"}
            </p>
          </div>
          <h2 className="product-title">{item.title}</h2>
        </Link>
      </div>
    </div>
  );
}
