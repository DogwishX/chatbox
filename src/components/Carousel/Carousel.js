import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

function Carousel({ content }) {
  const [
    viewportOffset,
    setViewportOffset,
  ] = useState(0);
  const [
    lastChildXPosition,
    setLastChildXPosition,
  ] = useState(0);

  useEffect(() => {
    const carouselViewport = document.querySelector(
      ".carousel__viewport"
    );
    carouselViewport.style = `transform: translateX(-${viewportOffset}px)`;

    // Hide next-btn
    const categoriesChildren = document.querySelector(
      ".categories"
    ).children;
    const categoriesLength =
      categoriesChildren.length;
    const carouselItem = document.querySelector(
      ".product-section"
    );
    const nextBtn = document.querySelector(
      "#next-btn"
    );
    carouselItem.clientWidth * categoriesLength -
      viewportOffset <=
    window.innerWidth
      ? (nextBtn.style.display = "none")
      : (nextBtn.style.display = "block");
  });

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        {content}
      </div>
      {viewportOffset > 0 && (
        <button
          id="prev-btn"
          onClick={updateViewportOffset}
          className="carousel__button carousel__button--left"
        >
          <FontAwesomeIcon
            className="carousel__icon"
            icon={faAngleLeft}
            size="2x"
            color="black"
          />
        </button>
      )}
      <button
        id="next-btn"
        onClick={updateViewportOffset}
        className="carousel__button carousel__button--right"
      >
        <FontAwesomeIcon
          className="carousel__icon"
          icon={faAngleRight}
          size="2x"
          color="black"
        />
      </button>
    </div>
  );

  function updateViewportOffset({
    currentTarget,
  }) {
    // DOM Elements
    const categoriesChildren = document.querySelector(
      ".categories"
    ).children;
    const categoriesLength =
      categoriesChildren.length;

    // Offset variables
    const carouselItem = document.querySelector(
      ".product-section"
    );
    const maxOffset =
      categoriesLength *
        carouselItem.clientWidth -
      window.innerWidth +
      carouselItem.clientWidth;
    const minOffset = 0;

    const isLessThanMaxOffset =
      viewportOffset + carouselItem.clientWidth <
      maxOffset;
    const isGreaterThanMinOffset =
      viewportOffset - carouselItem.clientWidth >=
      minOffset;

    // Clicked button identifier
    const isNextBtnClicked =
      currentTarget.id === "next-btn";

    // Checks if carousel is at start or end
    isNextBtnClicked
      ? isLessThanMaxOffset && handleOffset(1)
      : isGreaterThanMinOffset &&
        handleOffset(-1);

    function handleOffset(positiveOrNegative) {
      setViewportOffset(
        viewportOffset +
          carouselItem.clientWidth *
            positiveOrNegative
      );

      setLastChildXPosition(
        // categoriesChildren[
        //   categoriesLength - 1
        // ].getBoundingClientRect().x
        lastChildXPosition + positiveOrNegative
      );
    }
  }
}

export default Carousel;
