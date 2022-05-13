import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

function Carousel({ content }) {
  const [viewportOffset, setViewportOffset] = useState(0);
  const [hasReachedMax, setHasReachedMax] = useState(false);

  useEffect(() => {
    const carouselViewport = document.querySelector(".carousel__viewport");
    carouselViewport.style = `transform: translateX(-${viewportOffset}px)`;
  });

  return (
    <div className="carousel">
      <div className="carousel__viewport">{content}</div>
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
      {!hasReachedMax && (
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
      )}
    </div>
  );

  function updateViewportOffset({ currentTarget }) {
    // DOM Elements
    const categoriesLength = document.querySelector(".categories").children
      .length;

    // Offset variables
    const carouselItem = document.querySelector(".product-section");
    const maxOffset =
      categoriesLength * carouselItem.clientWidth -
      window.innerWidth +
      carouselItem.clientWidth;
    const minOffset = 0;

    const isLessThanMaxOffset =
      viewportOffset + carouselItem.clientWidth < maxOffset;
    const isGreaterThanMinOffset =
      viewportOffset - carouselItem.clientWidth >= minOffset;

    // Clicked button identifier
    const isNextBtnClicked = currentTarget.id === "next-btn";

    // Checks if carousel is at start or end
    isNextBtnClicked
      ? isLessThanMaxOffset &&
        setViewportOffset(viewportOffset + carouselItem.clientWidth)
      : isGreaterThanMinOffset &&
        setViewportOffset(viewportOffset - carouselItem.clientWidth);
  }
}

export default Carousel;
