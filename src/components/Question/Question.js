import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Answer from "../Answer/Answer";
import "./Question.css";

function Question({ cardInfo, updateFocusedQuestion }) {
  const {
    buttonText,
    question,
    options,
    numbered = true,
    sectionOrder,
    section,
  } = cardInfo;

  const [selectedOption, setSelectedOption] = useState();
  const optionState = { selectedOption, setSelectedOption };

  return (
    <div className="question">
      <div className="question__content">
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
    updateFocusedQuestion(event);
    options && storeAnswer();
  }

  function storeAnswer() {
    const sectionObj = JSON.parse(localStorage[section]);
    sectionObj[sectionOrder] = options[selectedOption].value;
    localStorage.setItem(section, JSON.stringify(sectionObj));
    console.log(localStorage);
  }
}

export default Question;
