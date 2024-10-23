import React from 'react';

// import './ProductCard.css';
const ProductCard = ({ product, addToCart }) => {
  return (

    <div className="product-card">
      <img src={`/images/${product.imageUrl}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Php {product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>

  );
};

export default ProductCard;