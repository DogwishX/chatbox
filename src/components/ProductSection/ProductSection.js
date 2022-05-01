import "./ProductSection.css";

function ProductSection({
  title,
  images,
  productQty,
}) {
  return (
    <div className="product-section">
      <div className="product-section__collection">
        {images.map((src, index) => (
          <img
            key={index}
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
          {productQty} produtos
        </p>
      </div>
    </div>
  );
}

export default ProductSection;
