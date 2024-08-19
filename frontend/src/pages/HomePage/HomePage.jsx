import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { Gallery } from "../../components/Gallery/Gallery";
import { SectionCollection } from "../../components/SectionCollection/SectionCollection";
import { SectionFeatured } from "../../components/SectionFeatured/SectionFeatured";
import { ProductList } from "../../components/ProductList/ProductList";
import { SectionSpecialOffer } from "../../components/SectionSpecialOffer/SectionSpecialOffer";
import { HomePageSlide } from "../../components/HomePageSlide/HomePageSlide";
import "./HomePage.css";
import axios from "axios";

const customSlides = [
  { slide: <HomePageSlide /> },
  { slide: <HomePageSlide /> },
  { slide: <HomePageSlide /> },
];

const sectionLink = [
  { text: "Ver todos →", href: "http://localhost:5173/productlist" },
];

export function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(response => {
        const limitedProducts = response.data.slice(0, 8).map(product => ({
          image: product.imagens.length > 0 ? product.imagens[1] : "", 
          name: product.nome,
          price: product.preco,
          priceDiscount: product.preco_promocao,
          link: `/product`,
        }));
        setProducts(limitedProducts);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="hp-wrapper">
        <Gallery customSlides={customSlides} navigation={false} />

        <Section
          className="hp-section"
          titleAlign="left"
          title="Coleções em destaque"
          children={<SectionCollection />}
        />

        <Section
          className="hp-section"
          titleAlign="center"
          title="Coleções em destaque"
          children={<SectionFeatured />}
        />

        <Section
          className="hp-section"
          titleAlign="left"
          link={sectionLink}
          title="Produtos em alta"
          children={<ProductList products={products} />}
        />

        <Section children={<SectionSpecialOffer />} />
      </div>
    </Layout>
  );
}
