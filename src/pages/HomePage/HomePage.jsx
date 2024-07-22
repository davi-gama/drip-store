import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Gallery } from "../../components/Gallery/Gallery";
import { Section } from "../../components/Section/Section";
import { SectionOffers } from "../../components/SectionOffers/SectionOffers";
import { SectionFeatured } from "../../components/SectionFeatured/SectionFeatured";
import { SectionSpecialOffer } from "../../components/SectionSpecialOffer/SectionSpecialOffer";
import { SectionTrending } from "../../components/SectionTrending/SectionTrending";

import "./HomePage.css";

const images = [
  { src: "/home-slide-1.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-3.jpeg" },
];

const produtosLink = [
  { text: "Ver todos", href: "http://localhost:5173/productList" },
];

export function HomePage() {
  return (
    <>
      <Header />

      <Gallery images={images} navigation={false} />

      <Section
        titleAlign="left"
        title="Coleções em destaque"
        children={<SectionOffers />}
      />

      <Section
        titleAlign="center"
        title="Coleções em destaque"
        children={<SectionFeatured />}
      />

      <Section
        titleAlign="left"
        title="Produtos em alta"
        children={<SectionTrending />}
      />

      <SectionSpecialOffer />

      <Footer />
    </>
  );
}
