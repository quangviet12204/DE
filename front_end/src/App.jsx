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
// Sửa đường dẫn import cho gọn (nếu file App.js nằm cùng cấp với folder component)
import Branch1 from "./component/Branch/information/DELUXEĐIENBIENPHU"; 
import AboutMe from "./pages/AboutMe";
import Booking from "./pages/Booking";
import Shop from "./pages/Shop";

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
              <Route
                path="/product"
                element={
                  <ProtectedRoute role="Admin">
                    <Product />
                  </ProtectedRoute>
                }
              />

              {/* Các trang thông tin khác */}
              <Route path="/branch" element={<Branch />} />
              <Route path="/branch/1" element={<Branch1 />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/booking" element={<Booking />} />
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