import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
const ShopCategory = () => <div className="pt-40 text-center">Danh mục sản phẩm</div>;

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Đặt Header cố định ở đây */}
      <Header /> 

      {/* 2. Phần nội dung thay đổi theo đường dẫn */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<ShopCategory />} />
      </Routes>
    </div>
  );
}

export default App;