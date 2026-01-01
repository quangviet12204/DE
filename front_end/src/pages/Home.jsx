import React from "react";
import Header from "../components/Header"; // Đường dẫn tới file Header bạn đã tạo

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header luôn nằm trên cùng */}

      {/* 2. Hero Section (Phần Home chính) */}
      <main className="relative">
        <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
          {/* Ảnh nền lớn giống mẫu */}
          <img
            src="https://4rau.vn/vnt_upload/weblink/z5627627477549_d00b0c036329c37021ca39c578027787.jpg"
            alt="Barber background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Lớp phủ làm tối ảnh (Overlay) để chữ nổi lên */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Nội dung chữ SHAVING */}
          <div className="relative z-10 text-center text-white select-none">
            <h1 className="text-[100px] md:text-[220px] font-black tracking-tighter leading-none opacity-90 italic">
              SHAVING
            </h1>

            {/* Cụm nút bấm ĐẶT LỊCH & MUA SẮM */}
            <div className="flex gap-4 justify-center mt-[-30px]">
              <button className="bg-[#e32a2a] hover:bg-red-700 text-white px-10 py-3 text-sm font-bold uppercase transition-all duration-300">
                ĐẶT LỊCH
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-3 text-sm font-bold uppercase transition-all duration-300">
                MUA SẮM
              </button>
            </div>
          </div>
        </div>

        {/* 3. Phần BẠN ĐẾN NHÀ bên dưới */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-light tracking-[0.2em] uppercase text-black mb-12">
            Bạn đến nhà
          </h2>
          {/* Tại đây bạn có thể thêm Grid ảnh các khách hàng */}
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Ví dụ các item ảnh */}
            <div className="aspect-square bg-gray-200 overflow-hidden">
              <img
                src="https://via.placeholder.com/400"
                alt="Customer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
