import React from "react";
import {Link} from "react-router-dom";

function formatPrice(price) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: price.currency,
  });
  const floatValue = parseFloat(`${price.amount}.${price.decimals}`);
  return formatter.format(floatValue);
}

export default function ItemComponent({ item }) {
  const formattedItemPrice = formatPrice(item.price);
  return (
      <div className="item">
        <img src={item.picture} alt={item.title}/>
        <div className="item-content">
          <Link to={`/items/${item.id}`} className="stretched-link">
            <div className="product-information">
              <p className="product-price">{formattedItemPrice}</p>
              <p className="product-shipping">{item.free_shipping ? 'Envio Gratis' : ''}</p>
              <p className="product-condition">{item.condition === 'new' ? 'Nuevo' : 'Usado' }</p>
            </div>
          <h2 className="product-title">{item.title}</h2>
          </Link>
        </div>
      </div>
  );
}