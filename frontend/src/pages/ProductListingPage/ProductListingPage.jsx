import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Section/Section";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { OrderBy } from "../../components/OrderBy/OrderBy";
import { ProductList } from "../../components/ProductList/ProductList";
import "./ProductListingPage.css";

function getRandomUniqueIds(startId, endId, numberOfIds) {
  const ids = new Set();
  while (ids.size < numberOfIds) {
    const randomId = Math.floor(Math.random() * (endId - startId + 1)) + startId;
    ids.add(randomId);
  }
  return Array.from(ids);
}

export function ProductListingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const startId = 1;
    const endId = 38;
    const numberOfProducts = 15;

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
      <div className="pl-wrapper">
        <OrderBy />
        <div className="produtos">
          <Sidebar />
          <Section
            className="pl-section"
            children={<ProductList products={products} />}
          />
        </div>
      </div>
    </Layout>
  );
}
