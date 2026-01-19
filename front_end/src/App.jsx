import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

// Layout
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import ProtectedRoute from "./component/ProtectedRoute";

// Pages
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Service from "./pages/Service";
import Policy from "./pages/Policy";
import Branch from "./pages/BranchList";
import AboutMe from "./pages/AboutMe";
import Booking from "./pages/Booking";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";


// Branch detail pages
import Branch1 from "./component/Branch/information/DELUXEĐIENBIENPHU";
import Branch2 from "./component/Branch/information/DISTRICT2";
import Branch3 from "./component/Branch/information/DISTRICT1";
import Branch4 from "./component/Branch/information/DISTRICT7";
import Branch5 from "./component/Branch/information/DISTRICT10";
import Branch6 from "./component/Branch/information/KHANGDIEN";
import Branch7 from "./component/Branch/information/THUTHIEMPARK";
import Branch8 from "./component/Branch/information/TRANQUANGKHAI";
import Branch9 from "./component/Branch/information/VERANDAH";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <br></br><br></br><br></br>

          <main className="content container mt-4">
            <Routes>
              {/* Trang công khai */}
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/service" element={<Service />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              {/* Auth */}
              <Route path="/login" element={<AuthPage />} />
              

              {/* Trang cần đăng nhập */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* Branch */}
              <Route path="/branch" element={<Branch />} />
              <Route path="/branch/1" element={<Branch1 />} />
              <Route path="/branch/2" element={<Branch2 />} />
              <Route path="/branch/3" element={<Branch3 />} />
              <Route path="/branch/4" element={<Branch5 />} />
              <Route path="/branch/5" element={<Branch4 />} />
              <Route path="/branch/6" element={<Branch6 />} />
              <Route path="/branch/7" element={<Branch7 />} />
              <Route path="/branch/8" element={<Branch8 />} />
              <Route path="/branch/9" element={<Branch9 />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
