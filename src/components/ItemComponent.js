import React from "react";
import {Link} from "react-router-dom";

function formatPrice(price) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: price.currency,
  });
  const floatValue = parseFloat(`${price.amount}.${price.decimals}`);
  const formattedPrice = formatter.format(floatValue);
  return formattedPrice;
}

export default function ItemComponent({ item }) {
  const formattedItemPrice = formatPrice(item.price);
  return <div className="item">
    <Link to={`/items/${item.id}`}>
      <img src={item.picture} alt={item.title}/>
    </Link>
    <div className="content">
      <p>{formattedItemPrice}</p>
      <h2>{item.title}</h2>
    </div>
  </div>;
}