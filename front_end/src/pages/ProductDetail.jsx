import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import "./style/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
        const data = await res.json();
        const currentProduct = data.data || data;
        setProduct(currentProduct);

        const relatedRes = await fetch(
          `http://127.0.0.1:8000/api/products?category=${currentProduct.Category}`
        );
        const relatedData = await relatedRes.json();
        const filtered = (Array.isArray(relatedData) ? relatedData : relatedData.data || [])
          .filter(p => String(p.ProductID) !== String(id))
          .slice(0, 4);

        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Lỗi fetch chi tiết:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="pt-40 text-center uppercase font-bold">Đang tải...</div>;
  }

  if (!product) {
    return <div className="pt-40 text-center uppercase font-bold">Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-grid">

        <div className="product-image-box">
          <img src={product.Image} alt={product.ProductName} />
        </div>

        <div className="product-info">
          <h1>{product.ProductName}</h1>

          <p className="product-price">
            {Number(product.Price).toLocaleString("vi-VN")} ₫
          </p>

          <div className="product-actions">
            <button>Thêm vào giỏ</button>
            <button>Mua ngay</button>
          </div>

          <div className="product-description">
            {product.Description}
          </div>
        </div>

      </div>

      <div className="related-products">
        <h2>Sản phẩm liên quan</h2>

        <div className="related-products-grid">
          {relatedProducts.map(item => (
            <ProductCard key={item.ProductID} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
