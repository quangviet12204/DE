import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import '../pages/style/Shop.css';

const Shop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchProducts = async () => {
      setLoading(true);
      try {   
        // Nếu có category, gọi API lọc (giả định Backend hỗ trợ query ?category=)
        // Nếu không, lấy tất cả sản phẩm
        const url = category 
          ? `http://127.0.0.1:8000/api/products?category=${category}` 
          : `http://127.0.0.1:8000/api/products`;
          
        const response = await fetch(url);
        const data = await response.json();
        
        // Lưu ý: Nếu API của bạn trả về { data: [...] } thì dùng data.data
        setProducts(Array.isArray(data) ? data : data.data || []);
      } catch (error) {
        console.error("Lỗi kết nối API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4">
      <div className="mb-10 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-black uppercase italic text-gray-900">
          {category ? category.replace('-', ' ') : "Tất cả sản phẩm"}
        </h1>
      </div>

      {loading ? (
        <div className="text-center py-20">Đang tải sản phẩm...</div>
      ) : (
        <div className="shop-grid">
          {products.map((item) => (
            <ProductCard key={item.ProductID} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;