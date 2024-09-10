import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const getProducts = (categoryId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allProducts = [
        { id: 1, name: 'Camiseta Bordada', category: 'camisetas', price: 25.000 },
        { id: 2, name: 'Gorra Bordada', category: 'gorras', price: 15.000 },
        { id: 3, name: 'Accesorios bordados', category: 'Accesorios', price: 10.000 },
      ];
      
      const filteredProducts = categoryId
        ? allProducts.filter(product => product.category === categoryId)
        : allProducts;
      
      resolve(filteredProducts);
    }, 1000);
  });
};

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then(products => {
        setProducts(products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{categoryId ? `Productos en ${categoryId}` : 'Todos los productos'}</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer