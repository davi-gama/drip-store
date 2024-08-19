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

function getRandomUniqueIds(start, end, count) {
  let result = new Set();

  while (result.size < count) {
    result.add(Math.floor(Math.random() * (end - start + 1)) + start);
  }

  return Array.from(result);
}

export function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const startId = 1;
    const endId = 38;
    const numberOfProducts = 8;

    const randomIds = getRandomUniqueIds(startId, endId, numberOfProducts);

    axios
      .all(
        randomIds.map((id) => axios.get(`http://localhost:3000/products/${id}`))
      )
      .then((responses) => {
        const limitedProducts = responses.map((response) => {
          const product = response.data;
          return {
            image: product.imagens.length > 0 ? product.imagens[0] : "",
            name: product.nome,
            price: product.preco,
            priceDiscount: product.preco_promocao,
            category: product.nome_categoria,
            link: `/product`,
          };
        });
        setProducts(limitedProducts);
      })
      .catch((error) => {
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
