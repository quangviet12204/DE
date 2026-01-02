import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductDetail = ({ products }) => {
  // Lấy "id" thay vì "productId" để khớp với App.jsx
  const { id } = useParams(); 
  
  // Tìm sản phẩm trong mảng products nhận từ props
  const product = products?.find((item) => String(item.ProductID) === id);

  if (!product) {
    return <div className="pt-40 text-center uppercase font-bold">Sản phẩm không tồn tại</div>;
  }
  const relatedProducts = products
  .filter(item => item.Category === product.Category && item.ProductID !== product.ProductID)
  .slice(0, 4);

  return (
    <div className="pt-[80px] bg-white">
      {/* BANNER CHI TIẾT */}
      <div className="relative h-[250px] w-full flex flex-col items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${product.Image})`, // Lấy ảnh sản phẩm làm nền luôn cho xịn
            filter: "brightness(0.4) blur(4px)" 
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-2">Chi tiết sản phẩm</h2>
          <nav className="flex items-center justify-center text-[11px] uppercase tracking-widest font-medium">
            <Link to="/" className="hover:text-red-600 transition-colors">Trang chủ</Link>
            <span className="mx-3 opacity-50">/</span>
            <Link to="/shop" className="hover:text-red-600 transition-colors">Mua sắm</Link>
            <span className="mx-3 opacity-50">/</span>
            <span className="text-gray-400">{product.ProductName}</span>
          </nav>
        </div>
      </div>

      {/* NỘI DUNG CHI TIẾT */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="border border-gray-100 p-4">
          <img src={product.Image} alt={product.ProductName} className="w-full h-auto" />
        </div>
        <div>
          <h1 className="text-3xl font-bold uppercase mb-4">{product.ProductName}</h1>
          <p className="text-2xl text-red-600 font-bold mb-6">
            {product.Price.toLocaleString()} đ
          </p>
          <div className="text-gray-600 text-sm leading-relaxed mb-8 border-t pt-6">
            {product.Description || "Mô tả sản phẩm đang được cập nhật..."}
          </div>
          <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[12px] font-bold uppercase">Số lượng:</span>
                <div className="flex border border-gray-200">
                  <button className="px-4 py-2 hover:bg-gray-100 border-r">-</button>
                  <input type="text" value="1" className="w-12 text-center outline-none" readOnly />
                  <button className="px-4 py-2 hover:bg-gray-100 border-l">+</button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="bg-black text-white py-4 font-bold uppercase text-[12px] hover:bg-gray-800 transition-all">
                  Thêm vào giỏ hàng
                </button>
                <button className="bg-red-600 text-white py-4 font-bold uppercase text-[12px] hover:bg-red-700 transition-all">
                  Mua ngay
                </button>
              </div>
            </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-20 border-t border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Sản Phẩm Liên Quan</h2>
        <p className="text-gray-500 text-sm">Các sản phẩm bạn nên xem qua</p>
      </div>

      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.map((item) => (
            <ProductCard key={item.ProductID} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">Không có sản phẩm liên quan nào.</p>
      )}
    </div>
    </div>
  );
};

export default ProductDetail;