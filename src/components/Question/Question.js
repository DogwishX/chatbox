import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Answer from "../Answer/Answer";
import "./Question.css";

function Question({ cardInfo, updateFocusedQuestion, setDisplayResult }) {
  const {
    header,
    numbered = true,
    question,
    options,
    order,
    sectionOrder,
    section,
    buttonText,
    end,
  } = cardInfo;
  const [selectedOption, setSelectedOption] = useState();
  const optionState = {
    selectedOption,
    setSelectedOption,
  };

  useEffect(() => {
    // Check if section exists in localStorage
    const localStorageSection =
      section && JSON.parse(localStorage[section] || "{}");

    // Check if options exists in localStorage
    const localStorageSectionOrder =
      options && localStorageSection[sectionOrder];

    // Check if selectedOption index exists in localStorage
    const localStorageOptionIndex =
      localStorageSectionOrder !== undefined && localStorageSectionOrder.index;

    setSelectedOption(localStorageOptionIndex || undefined);
  }, []);

  return (
    <div className="question">
      <div className="question__content">
        {header && <h1 className="question__header">{header}</h1>}
        {numbered && <h2 className="question__number">{sectionOrder}.</h2>}
        <h2 className="question__title">{question}</h2>
        {options && <Answer options={options} optionState={optionState} />}
        <SubmitButton text={buttonText} />
      </div>
    </div>
  );

  function SubmitButton() {
    return (
      <button
        id="submit-btn-next"
        className="question__submit"
        onClick={handleSubmit}
      >
        {buttonText || (
          <p className="question__submit--default">
            OK
            <span className="question__check-mark">
              <FontAwesomeIcon icon={faCheck} color="white" />
            </span>
          </p>
        )}
      </button>
    );
  }

  function handleSubmit(event) {
    if (end) {
      storeAnswer();
      setDisplayResult(true);
    }

    if (options) {
      if (selectedOption) {
        storeAnswer();
        updateFocusedQuestion(event);
        return;
      }
      return;
    }

    updateFocusedQuestion(event);
  }

  function storeAnswer() {
    const localStorageSectionObj = localStorage[section] || "{}";
    const sectionObj = JSON.parse(localStorageSectionObj);

    sectionObj[sectionOrder] = {
      value: options[selectedOption].value,
      index: selectedOption,
    };

    localStorage.setItem(section, JSON.stringify(sectionObj));
    updateLastQuestionAnswered();
  }

  function updateLastQuestionAnswered() {
    localStorage.setItem("lastAnswered", order);
  }
}

export default Question;
