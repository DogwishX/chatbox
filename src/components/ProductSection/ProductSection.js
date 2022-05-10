import "./ProductSection.css";
import products from "../../data/products";

function ProductSection({ title, categoryProducts }) {
  return (
    <div className="product-section">
      <div className="product-section__collection">
        {categoryProducts.map((product, index) => {
          const currentProduct = products.find(
            (item) => item.name.toLowerCase() === product.toLowerCase()
          );
          const currentProductImgSrc = currentProduct.image;
          return (
            <img
              key={index}
              className="product-section__image"
              src={currentProductImgSrc}
            />
          );
        })}
      </div>
      <div className="product-section__text-container">
        <h2 className="product-section__title">{title}</h2>
        <p className="product-selection__product-count">
          {/* {categoryProducts.length} produtos */}
        </p>
      </div>
    </div>
  );
}

export default ProductSection;
