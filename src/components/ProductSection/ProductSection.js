import products from "../../data/products";
import "./ProductSection.css";

function ProductSection({
  title,
  categoryProducts,
  selectedSkinType,
  categoryId,
}) {
  return (
    <div className="product-section">
      <a href={selectedSkinType + "/" + categoryId}>
        <div className="product-section__collection">
          {categoryProducts.map((product, index) => {
            const currentProduct = products.find(
              (item) => item.name.toLowerCase() === product.toLowerCase()
            );
            const currentProductImgSrc = currentProduct.image;
            console.log(currentProduct.name);
            return (
              <img
                key={index}
                className="product-section__image"
                src={currentProductImgSrc}
                alt="product shelf"
              />
            );
          })}
        </div>
        <div className="product-section__text-container">
          <h2 className="product-section__title">{title}</h2>
          <p className="product-selection__product-count">
            {categoryProducts.length} produtos
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProductSection;
