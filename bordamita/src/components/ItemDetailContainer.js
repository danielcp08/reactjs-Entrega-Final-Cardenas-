import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const getProductDetails = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = {
        id: id,
        name: 'saco bordado',
        description: 'saco en algodon boordado a mano con el motivo personalizado',
        price: 110.000,
        stock: 10
      };
      resolve(product);
    }, 1000); 
  });
};

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductDetails(id)
      .then(productData => {
        setProduct(productData);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Precio: ${product.price}</p>
          <p className="card-text">Stock disponible: {product.stock}</p>
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;