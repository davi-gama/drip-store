import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductListingPage } from "../pages/ProductListingPage/ProductListingPage";
import { ProductViewPage } from "../pages/ProductViewPage/ProductViewPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/productlist" element={<ProductListingPage />} />
      <Route path="/product" element={<ProductViewPage />} />
    </Routes>
  );
}
