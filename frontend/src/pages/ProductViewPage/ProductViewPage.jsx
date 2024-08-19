import { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { Gallery } from "../../components/Gallery/Gallery";
import { ProductList } from "../../components/ProductList/ProductList";
import { BuyBox } from "../../components/BuyBox/BuyBox";
import "./ProductViewPage.css";

const images = [
  { src: "/air-force-slide-1.png" },
  { src: "/air-force-slide-2.png" },
  { src: "/air-force-slide-3.png" },
  { src: "/air-force-slide-4.png" },
  { src: "/air-force-slide-5.png" },
];

const sectionLink = [
  { text: "Ver todos →", href: "http://localhost:5173/productlist" },
];

function getRandomUniqueIds(startId, endId, count) {
  const ids = [];
  while (ids.length < count) {
    const randomId = Math.floor(Math.random() * (endId - startId + 1)) + startId;
    if (!ids.includes(randomId)) {
      ids.push(randomId);
    }
  }
  return ids;
}

export function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const startId = 1;
    const endId = 25;
    const numberOfProducts = 4;

    const randomIds = getRandomUniqueIds(startId, endId, numberOfProducts);

    axios
      .all(randomIds.map((id) => axios.get(`http://localhost:3000/products/${id}`)))
      .then((responses) => {
        const limitedProducts = responses.map((response) => {
          const product = response.data;
          return {
            image: product.imagens.length > 0 ? product.imagens[0] : "",
            name: product.nome,
            price: product.preco,
            priceDiscount: product.preco_promocao,
            link: `/product/${product.id}`,
          };
        });
        setProducts(limitedProducts);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <Section
      className="vp-section"
      titleAlign="left"
      link={sectionLink}
      title="Produtos relacionados"
      children={<ProductList products={products} />}
    />
  );
}

export function ProductViewPage() {
  return (
    <Layout>
      <div className="vp-wrapper">
        <div className="page-path">
          <span>Home</span> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Nature Masculino
        </div>
        <div className="gallery-buybox">
          <Gallery slides={images} navigation={true} showThumbs />
          <BuyBox
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="38416711"
            star={4.7}
            rating={90}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad veniam doloribus reprehenderit amet rerum vero consectetur suscipit tempore iure."
            price="219,00"
            priceDiscount="219,00"
          />
        </div>
        <HomePage />
      </div>
    </Layout>
  );
}
