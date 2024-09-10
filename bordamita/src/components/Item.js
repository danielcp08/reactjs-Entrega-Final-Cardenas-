import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;