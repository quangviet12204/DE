import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import AboutMe from "./pages/AboutMe";
import Policy from "./pages/Policy";
import Branch from "./pages/BranchList";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
     

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
