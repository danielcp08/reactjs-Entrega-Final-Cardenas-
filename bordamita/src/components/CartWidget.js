import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge bg-danger ms-2">{itemCount}</span>
    </div>
  );
};

export default CartWidget;