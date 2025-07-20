import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
        <img
          src={product.image}
          className="card-img-top img-fluid"
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </Link>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text fw-bold">{product.price.toLocaleString()}원</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(product)}
        >
          담기
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
