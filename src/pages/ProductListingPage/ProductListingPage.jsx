import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { ProductSection } from "../../components/ProductList/ProductList";
import "./ProductListingPage.css";

export function ProductListingPage() {
  return (
    <>
      <Header />
      <OrderBy />
      <div className="produtos">
        <Sidebar />
        <ProductSection />
      </div>
      <Footer />
    </>
  );
}
