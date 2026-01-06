import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-grid">
      {products.map(p => (
        <div className="product-card" key={p.ProductID}>
          <img src={p.Image} alt={p.ProductName} />
          <h3>{p.ProductName}</h3>
          <p className="brand">{p.BrandName}</p>
          <p className="price">{p.Price.toLocaleString()} ₫</p>
          <button>Mua ngay</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
