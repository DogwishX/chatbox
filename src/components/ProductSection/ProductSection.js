import "./ProductSection.css";

function ProductSection({ title, images }) {
  return (
    <div className="product-section">
      <div className="product-section__collection">
        {images.map((src) => (
          <img
            className="product-section__image"
            src={src}
          />
        ))}
      </div>
      <div className="product-section__text-container">
        <h2 className="product-section__title">
          {title}
        </h2>
        <p className="product-selection__product-count">
          5 produtos
        </p>
      </div>
    </div>
  );
}

export default ProductSection;
