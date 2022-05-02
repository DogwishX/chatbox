import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Answer.css";

function Answer({ options, optionState }) {
  const { selectedOption, setSelectedOption } = optionState;
  const [activeAnswerIndex, setActiveAnswerIndex] = useState();

  const optionPrefixMap = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
  };

  return (
    <ul className="answer__list">
      {options.map(({ value, text }, index) => {
        const isItemActive = selectedOption == index;
        return (
          <li
            key={value}
            data-value={value}
            data-index={index}
            onClick={selectAnswer}
            className={
              isItemActive
                ? `answer__item answer__item--active`
                : `answer__item`
            }
          >
            <p className="answer__prefix">{optionPrefixMap[index]}</p>
            <p className="answer__text">{text}</p>
            {isItemActive && (
              <FontAwesomeIcon
                className="answer__check-mark"
                icon={faCheck}
                color="black"
              />
            )}
          </li>
        );
      })}
    </ul>
  );

  function selectAnswer({ currentTarget }) {
    applyActiveStyling(currentTarget);
    setSelectedOption(currentTarget.dataset.index);
  }

  function applyActiveStyling(currentTarget) {
    const answerItemNodeList = document.querySelectorAll(".answer__item");

    answerItemNodeList.forEach((item) =>
      item.classList.remove("answer__item--active")
    );

    currentTarget.classList.add("answer__item--active");
  }
}

export default Answer;
