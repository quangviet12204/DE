import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";

import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Service from "./pages/Service";
import ProductDetail from "./pages/ProductDetail";
import Policy from "./pages/Policy";
import Branch from "./pages/BranchList";

import ProtectedRoute from "./component/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Booking from "./pages/Booking";


import Footer from "./component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <main className="content">
  <div className="container">
    <Routes>
  <Route path="/" element={<HomePage />} />

  <Route
    path="/product"
    element={
      <ProtectedRoute role="Admin">
        <Product />
      </ProtectedRoute>
    }
  />

  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/service" element={<Service />} />
  <Route path="/branch" element={<Branch />} />
  <Route path="/aboutme" element={<AboutMe />} />
  <Route path="/policy" element={<Policy />} />
  <Route path="/booking" element={<Booking />} />
</Routes>

  </div>
</main>


        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;