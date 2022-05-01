import pages from "../../data/pages";
import products from "../../data/products";
import ProductSection from "../ProductSection/ProductSection";
import "./Categories.css";

function Categories({ selectedPage }) {
  console.log(selectedPage);
  const selectedPageCategories = pages.find(
    ({ id }) => id === selectedPage
  ).categories;

  return (
    <div className="categories">
      {selectedPageCategories.map(
        ({
          categoryName,
          categoryId,
          categoryProducts,
        }) => (
          <ProductSection
            key={categoryId}
            title={categoryName}
            productQty={categoryProducts.length}
            images={categoryProducts.map((item) =>
              returnProductImage(item)
            )}
          />
        )
      )}
    </div>
  );
}

function returnProductImage(item) {
  const currentProductObj = products.find(
    (product) => product.name === item
  );
  const currentProductImg =
    currentProductObj.image;
  return currentProductImg;
}

export default Categories;
