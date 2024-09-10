import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Bordamita</Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/category/camisetas">Camisetas</Link>
          <Link className="nav-item nav-link" to="/category/gorras">Gorras</Link>
          <Link className="nav-item nav-link" to="/category/accesorios">Accesorios</Link>
        </div>
        <div className="ml-auto">
          <Link to="/cart" className="btn btn-outline-primary">
            Carrito <span className="badge bg-secondary">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;