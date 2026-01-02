import React, { useState, useEffect ,} from 'react';
import { useParams,} from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { mockData } from '../data';

const Shop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
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
    <div className="pt-20 pb-20 max-w-7xl mx-auto px-4">
      <div className="mb-10 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-black uppercase italic text-gray-900">
          {category ? category.replace('-', ' ') : "Hair Styling Wax"}
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