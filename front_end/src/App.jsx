import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import Policy from "./pages/Policy";
import Branch from "./pages/BranchList";
import Service from "./pages/Service";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Header />
     

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
