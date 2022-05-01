import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Categories from "../Categories/Categories";
import "./Recommendations.css";

function Recommendations() {
  const [
    selectedPage,
    setSelectedPage,
  ] = useState("seca");

  return (
    <div className="recommendations">
      <h2 className="recommendations__title">
        Nossas Sugestões
      </h2>
      <div className="recommendations__tabs">
        <h3
          id="seca"
          className="recommendations__tab recommendations__tab--active"
          onClick={displayTab}
        >
          Pele Seca
        </h3>
        <h3
          id="oleosa"
          className="recommendations__tab "
          onClick={displayTab}
        >
          Pele Oleosa
        </h3>
      </div>
      <Carousel
        content={
          <Categories
            selectedPage={selectedPage}
          />
        }
      />
    </div>
  );

  function displayTab({ currentTarget }) {
    clearActiveStyling();
    applyActiveStyling(currentTarget);
    setSelectedPage(currentTarget.id);
  }

  function clearActiveStyling() {
    const tabNodeList = document.querySelectorAll(
      ".recommendations__tab"
    );
    tabNodeList.forEach((tab) =>
      tab.classList.remove(
        "recommendations__tab--active"
      )
    );
  }

  function applyActiveStyling(currentTarget) {
    currentTarget.classList.add(
      "recommendations__tab--active"
    );
  }
}

export default Recommendations;
