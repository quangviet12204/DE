import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';

const Header = () => {
  const shopSubMenu = [
    { name: "SÁP VUỐT TÓC", link: "/shop" },
    { name: "POMADE", link: "/shop" },
    { name: "DẦU GỘI / XẢ", link: "/shop" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 relative z-[100]">
      {/* Banner Đỏ */}
      <div className="bg-red-600 text-white text-[10px] py-1.5 text-center uppercase tracking-widest font-bold">
        Chúng tôi đã có thêm chi nhánh mới tại: 188A Trần Quang Khải Q1...
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="anh.jpg" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Menu Center */}
        <ul className="hidden md:flex items-center space-x-8 text-[13px] font-bold uppercase">
          
          {/* MUA SẮM có Dropdown */}
          <li className="relative group py-2 flex items-center gap-1 cursor-pointer">
            <Link to="/shop" className="group-hover:text-red-600 flex items-center gap-1">
              MUA SẮM <ChevronDown size={14} />
            </Link>

            {/* Submenu hiện ra khi Hover */}
            <ul className="absolute left-0 top-full mt-0 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[101]">
              {shopSubMenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="block px-4 py-3 text-[11px] text-gray-700 hover:bg-gray-50 hover:text-red-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="hover:text-gray-500"><Link to="/academy">HỌC BARBER</Link></li>
          <li className="hover:text-gray-500"><Link to="/locations">CHI NHÁNH</Link></li>
             <li className="hover:text-gray-500"><Link to="/locations">Tin Tóc</Link></li>
                <li className="hover:text-gray-500"><Link to="/locations">Đặt Lịch</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-gray-700">
          <Search size={20} />
          <User size={20} />
          <Link to="/cart" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;