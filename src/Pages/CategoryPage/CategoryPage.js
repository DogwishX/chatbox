import pages from "../../data/pages";
import products from "../../data/products";

function SectionPage({ categoryId, skinTypeId }) {
  const { name, categories } = pages.find((page) => page.id === skinTypeId);
  const { categoryName, categoryProducts } = categories.find(
    (category) => category.categoryId === categoryId
  );

  return (
    <div className="product-category">
      <h1 className="product-category__title">
        {categoryName} para a sua pele:
      </h1>
      <p className="product-category__skin-type">
        <em>{name}</em>
      </p>
    </div>
  );
}

export default SectionPage;
