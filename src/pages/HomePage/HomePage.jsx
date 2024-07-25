import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { Gallery } from "../../components/Gallery/Gallery";
import { SectionCollection } from "../../components/SectionCollection/SectionCollection";
import { SectionFeatured } from "../../components/SectionFeatured/SectionFeatured";
import { ProductList } from "../../components/ProductList/ProductList";
import { SectionSpecialOffer } from "../../components/SectionSpecialOffer/SectionSpecialOffer";
import { HomePageSlide } from "../../components/HomePageSlide/HomePageSlide";
import "./HomePage.css";

const customSlides = [
  { slide: <HomePageSlide /> },
  { slide: <HomePageSlide /> },
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

export function HomePage() {
  return (
    <Layout
      children={
        <div className="home-page-wrapper">
          <Gallery customSlides={customSlides} navigation={false} />

          <Section
            className="home-page-section"
            titleAlign="left"
            title="Coleções em destaque"
            children={<SectionCollection />}
          />

          <Section
            className="home-page-section"
            titleAlign="center"
            title="Coleções em destaque"
            children={<SectionFeatured />}
          />

          <Section
            className="home-page-section"
            titleAlign="left"
            link={sectionLink}
            title="Produtos em alta"
            children={<ProductList products={products} />}
          />

          <Section children={<SectionSpecialOffer />} />
        </div>
      }
    />
  );
}
