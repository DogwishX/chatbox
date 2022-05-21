import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import pages from "../../data/pages";
import products from "../../data/products";
import Nav from "../../components/Nav/Nav";
import "./CategoryPage.css";
import { useEffect } from "react";
import usePageTracking from "../../hooks/usePageTracker";

function SectionPage({ categoryId, skinTypeId }) {
  const { name, categories } = pages.find((page) => page.id === skinTypeId);
  const { categoryName, categoryProducts } = categories.find(
    (category) => category.categoryId === categoryId
  );
  const isNotException = !(skinTypeId === "base" || skinTypeId === "corpo");
  usePageTracking();

  useEffect(() => {
    document.title = `PicSkin - ${categoryName} - ${
      pages.find((page) => page.id === skinTypeId).name
    }`;
  }, []);

  return (
    <>
      <Nav />
      <div className="product-category">
        <Header />
        <ProductsGrid />
      </div>
    </>
  );

  function Header() {
    return (
      <div className="product-category__header">
        <Breadcrumb />
        <h1 className="product-category__title">{categoryName}</h1>
        {isNotException && (
          <p className="product-category__skin-type">
            Para a sua pele:
            <em> {name}</em>
          </p>
        )}
      </div>
    );
  }

  function Breadcrumb() {
    return (
      <a className="breadcrumb" href={`../${skinTypeId}`}>
        <FontAwesomeIcon
          className="breadcrumb__arrow"
          icon={faArrowLeft}
          color="#4a4a4a"
        />
        <p className="breadcrumb__text">
          Voltar para a página{" "}
          {skinTypeId === "base" ? "inicial" : "de produtos"}
        </p>
      </a>
    );
  }

  function ProductsGrid() {
    const categoryProductsData = categoryProducts.map((productName) =>
      products.find((productData) => productData.name === productName)
    );

    return (
      <div className="products-grid">
        {categoryProductsData.map(({ name, amazonLink, image }) => (
          <a
            className="products-grid__card"
            href={amazonLink}
            target="_blank"
            rel="noreferrer"
          >
            <img className="products-grid__image" src={image} alt={name} />
            <h2 className="products-grid__product-name">{name}</h2>
          </a>
        ))}
      </div>
    );
  }
}

export default SectionPage;
