import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="group bg-white border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl relative flex flex-col h-full">
      {/* 1. Link bọc ảnh và thông tin để bấm vào xem chi tiết */}
      <Link to={`/product/${product.ProductID}`} className="flex flex-col h-full">
        
        {/* Khung ảnh - Tỉ lệ 1:1 theo mẫu 4RAU */}
        <div className="aspect-square w-full bg-[#f9f9f9] overflow-hidden mb-4 flex items-center justify-center relative">
          <img 
            src={product.Image || "https://via.placeholder.com/300"} 
            alt={product.ProductName}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badge trạng thái dựa trên cột Stock trong DB */}
          {product.Stock <= 0 && (
            <div className="absolute top-2 right-2 bg-black text-white text-[8px] font-bold px-2 py-1 uppercase">
              Hết hàng
            </div>
          )}
        </div>

        {/* Thông tin văn bản */}
        <div className="text-center px-2 flex-grow">
          {/* Hiển thị Brand - Tận dụng BrandID từ database */}
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-1 font-medium">
             {/* Sau này Backend sẽ trả về BrandName, tạm thời hiện BrandID */}
             {product.BrandName || `Thương hiệu #${product.BrandID}`}
          </p>
          
          {/* ProductName - Giới hạn 2 dòng để card luôn đều nhau */}
          <h3 className="text-[11px] font-black uppercase tracking-tight h-10 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors leading-tight">
            {product.ProductName}
          </h3>
          
          {/* Price - Định dạng tiền tệ từ cột decimal(10,2) */}
          <p className="text-red-600 font-black text-[14px]">
            {Number(product.Price).toLocaleString('vi-VN')} ₫
          </p>
        </div>
      </Link>

      {/* 2. Nút Thêm vào giỏ - Hiện lên khi hover */}
      <button 
        disabled={product.Stock <= 0}
        className={`w-full py-3 mt-4 text-[10px] font-bold uppercase transition-all duration-300 
          ${product.Stock > 0 
            ? 'bg-black text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
      >
        {product.Stock > 0 ? 'Thêm vào giỏ' : 'Tạm hết hàng'}
      </button>
    </div>
  );
};

export default ProductCard;