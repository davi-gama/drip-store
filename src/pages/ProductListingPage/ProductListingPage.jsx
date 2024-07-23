import { Layout } from "../../components/Layout/Layout";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { ProductList } from "../../components/ProductList/ProductList";
import "./ProductListingPage.css";

export function ProductListingPage() {
  return (
    <Layout
      children={
        <div className="product-listing-page-wrapper">
          <OrderBy />
          <div className="produtos">
            <Sidebar />
            <ProductList />
          </div>
        </div>
      }
    />
  );
}
