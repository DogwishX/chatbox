import Nav from "../../components/Nav/Nav";
import resultImg from "../../assets/result.jpg";
import ProductSection from "../../components/ProductSection/ProductSection";
import pages from "../../data/pages";
import "./SkinPage.css";

function SkinPage({ selectedSkinType }) {
  const currentPage = pages.find((item) => item.id === selectedSkinType);
  return (
    <>
      <Nav />
      <div className="skin-page">
        <img
          className="skin-page__image"
          src={resultImg}
          alt="Random products being displayed"
        />
        <h1 className="skin-page__title">Nossas recomendacoes</h1>
        <p className="skin-page__text">
          Estes produtos foram recomendados por nossos especialistas para o seu
          tipo de pele:
          <em>{currentPage.name}</em>
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
