import React from "react";
import { Link } from "react-router-dom";
import "../assets/ProductCard.css";
import { addToCart } from "../utils/cart";


const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="group bg-white border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl relative flex flex-col h-full">
      
      <Link to={`/product/${product.ProductID}`} className="flex flex-col h-full">
        
        {/* Image */}
        <div className="aspect-square w-full bg-[#f9f9f9] overflow-hidden mb-4 flex items-center justify-center relative">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="text-center px-2 flex-grow">
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-1 font-medium">
            Brand ID: {product.BrandID}
          </p>

          <h3 className="text-[11px] font-black uppercase tracking-tight h-10 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors leading-tight">
            {product.name}
          </h3>

          <p className="text-red-600 font-black text-[14px]">
            {Number(product.price).toLocaleString("vi-VN")} ₫
          </p>
        </div>
      </Link>

      {/* Button (tạm thời luôn cho phép click) */}
      <button
  className="w-full py-3 mt-4 text-[10px] font-bold uppercase bg-black text-white hover:bg-red-600 transition-all duration-300"
  onClick={(e) => {
    e.preventDefault();

    addToCart({
      ProductID: product.ProductID,
      name: product.name,
      price: product.price,
      image: `http://127.0.0.1:8000/images/products/${product.image}`,
      quantity: 1,
    });

    alert(` ${product.name} has been added to the cart!`);
  }}
>
  Add to cart
</button>


    </div>
  );
};

export default ProductCard;
