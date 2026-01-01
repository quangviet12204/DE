import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const mockData = [
    { 
      ProductID: 1, 
      BrandID: "Roug", 
      ProductName: "EXPEDITION RESERVE SHAMPOO 250ml", 
      Price: 899000, 
      Image: "/wax/1.jpg",
      Stock: 10,
      Category: "dau-goi" 
    },
    { 
      ProductID: 2, 
      BrandID: 102,
      ProductName: "CAPTAIN FAWCETT'S STRONG POMADE", 
      Price: 899000, 
      Image: "/wax/2.jpg",
      Stock: 5,
      Category: "pomade"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category) {
      const filtered = mockData.filter(p => p.Category === category);
      setProducts(filtered);
    } else {
      setProducts(mockData);
    }
  }, [category]);

  return (
    <div className="pt-44 pb-20 max-w-7xl mx-auto px-4">
      <div className="mb-10 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-black uppercase italic text-gray-900">
          {category ? category.replace('-', ' ') : "Tất cả sản phẩm"}
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.ProductID} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;