import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductListingPage } from "../pages/ProductListingPage/ProductListingPage";
import { ProductViewPage } from "../pages/ProductViewPage/ProductViewPage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productlist" element={<ProductListingPage />} />
      <Route path="/product" element={<ProductViewPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
