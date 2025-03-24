import React, { useState } from "react";
import "../App.css";
import Product from "../components/Product";

export default function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Danganronpa", price: "$59,95", image: "/images/product.jpg" },
    { id: 2, name: "Omori", price: "$40", image: "/images/product2.jpg" },
    { id: 3, name: "Rain Code", price: "$49,99", image: "/images/product3.jpg" },
    { id: 4, name: "Profesor Layton", price: "$39,99", image: "/images/product4.jpg" },
    { id: 5, name: "Pokemon Púrpura", price: "$49,99", image: "/images/product5.jpg" }
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };


  return (
    <div className="Product">
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <h2>Carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}