import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { ProductList } from "../../components/ProductList/ProductList";
import "./ProductListingPage.css";

const products = [
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "/sneaker-card.png",
    price: "$200",
    link: "/product",
    priceDiscount: "$100",
  },
];

export function ProductListingPage() {
  return (
    <Layout
      children={
        <div className="product-listing-page-wrapper">
          <OrderBy />
          <div className="produtos">
            <Sidebar />
            <Section
              className="product-listing-page-section"
              children={<ProductList products={products} />}
            />
          </div>
        </div>
      }
    />
  );
}
