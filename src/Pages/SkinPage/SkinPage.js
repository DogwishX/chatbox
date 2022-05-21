import { useEffect } from "react";
import usePageTracking from "../../hooks/usePageTracker";

import Nav from "../../components/Nav/Nav";
import ProductSection from "../../components/ProductSection/ProductSection";
import pages from "../../data/pages";
import "./SkinPage.css";

function SkinPage({ selectedSkinType }) {
  const currentPage = pages.find((item) => item.id === selectedSkinType);
  usePageTracking();
  useEffect(() => {
    document.title = `PicSkin - ${currentPage.name}`;
  }, []);
  return (
    <>
      <Nav />
      <div className="skin-page">
        <h1 className="skin-page__title">Nossas recomendacoes</h1>
        <p className="skin-page__text">
          Estes produtos foram recomendados por nossos especialistas para o seu
          {selectedSkinType === "corpo" ? " corpo." : "tipo de pele:"}
          {selectedSkinType !== "corpo" && <em>{currentPage.name}</em>}
        </p>
        {currentPage.categories.map(
          ({ categoryId, categoryName, categoryProducts }, index) => (
            <ProductSection
              key={index}
              title={categoryName}
              categoryId={categoryId}
              categoryProducts={categoryProducts}
              selectedSkinType={selectedSkinType}
            />
          )
        )}
      </div>
    </>
  );
}

export default SkinPage;
