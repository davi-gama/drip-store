import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OrderBy } from "../../components/OrderBy/OrderBy";

export function ProductListingPage() {
  return (
    <>
      <Header />
      <OrderBy />
      <Sidebar />
      <Footer />
    </>
  );
}
