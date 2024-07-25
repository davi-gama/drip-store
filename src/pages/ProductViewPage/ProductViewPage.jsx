import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { Gallery } from "../../components/Gallery/Gallery";
import { ProductList } from "../../components/ProductList/ProductList";
import { BuyBox } from "../../components/BuyBox/BuyBox";
import "./ProductViewPage.css";

const images = [
  { src: "/air-force-slide-1.png" },
  { src: "/air-force-slide-2.png" },
];

const sectionLink = [
  { text: "Ver todos →", href: "http://localhost:5173/productlist" },
];

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
];

export function ProductViewPage() {
  return (
    <Layout
      children={
        <div className="vp-wrapper">
          <div className="page-path">
            <span>Home</span> / Produtos / Tênis / Nike / Tênis Nike Revolution
            6 Nature Masculino
          </div>
          <div className="gallery-buybox">
            <Gallery slides={images} navigation={true} />
            <BuyBox
              name="Tênis Nike Revolution 6 Next Nature Masculino"
              reference="38416711"
              star={4.7}
              rating={90}
              description="Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Rem ad veniam 
              doloribus reprehenderit amet rerum vero 
              consectetur suscipit tempore iure."
              price="219,00"
              priceDiscount="219,00"
            />
          </div>
          <Section
            className="vp-section"
            titleAlign="left"
            link={sectionLink}
            title="Produtos relacionados"
            children={<ProductList products={products} />}
          />
        </div>
      }
    />
  );
}
