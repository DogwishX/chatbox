import pages from "../../data/pages";
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
        ({ categoryName, categoryId }) => (
            // <ProductSection title='categoryName' images={}
        )
      )}
    </div>
  );
}

export default Categories;
