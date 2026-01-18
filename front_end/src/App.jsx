// Thêm dòng này vào nhóm các câu lệnh import ở đầu file
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// Components
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import ProtectedRoute from "./component/ProtectedRoute";

// import ProductCard from "./component/ProductCard"; // Tạm tắt vì chưa sử dụng

// Pages
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Service from "./pages/Service";
import ProductDetail from "./pages/ProductDetail";
import Policy from "./pages/Policy";
import Branch from "./pages/BranchList";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
// Sửa đường dẫn import cho gọn (nếu file App.js nằm cùng cấp với folder component)
import Branch1 from "./component/Branch/information/DELUXEĐIENBIENPHU";
import Branch3 from "./component/Branch/information/DISTRICT1";
import Branch2 from "./component/Branch/information/DISTRICT2";
import Branch4 from "./component/Branch/information/DISTRICT7";
import Branch5 from "./component/Branch/information/DISTRICT10";
import Branch6 from "./component/Branch/information/KHANGDIEN";
import Branch7 from "./component/Branch/information/THUTHIEMPARK";
import Branch8 from "./component/Branch/information/TRANQUANGKHAI";
import Branch9 from "./component/Branch/information/VERANDAH";
import AboutMe from "./pages/AboutMe";
import Booking from "./pages/Booking";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <CartProvider>
        <BrowserRouter>
          <div className="app-wrapper">
            <Header />
<br></br><br></br><br></br>
            <main className="content">
              <div className="container">
                <Routes>
              {/* Trang chủ */}
                  <Route path="/" element={<HomePage />} />

              {/* Khu vực Shop & Sản phẩm */}
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/shop/:category" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetail />} />

              {/* Trang Admin (Được bảo vệ) */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />

                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />

 
              {/* Các trang thông tin khác */}
                  <Route path="/branch" element={<Branch />} />
                  <Route path="/branch/1" element={<Branch1 />} />
                  <Route path="/branch/2" element={<Branch2 />} />
                  <Route path="/branch/3" element={<Branch3 />} />
                  <Route path="/branch/5" element={<Branch4 />} />
  <Route path="/branch/4" element={<Branch5 />} />
                  <Route path="/branch/6" element={<Branch6 />} />
                  <Route path="/branch/7" element={<Branch7 />} />
                  <Route path="/branch/8" element={<Branch8 />} />
                  <Route path="/branch/9" element={<Branch9 />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/service" element={<Service />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />

              {/* Trang Đăng Nhập */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
  );
}
export default App;