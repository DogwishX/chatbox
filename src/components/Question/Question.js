import { useState } from "react";
import Answer from "../Answer/Answer";
import "./Question.css";

function Question({ cardInfo, updateFocusedQuestion }) {
  const [selectedOption, setSelectedOption] = useState();
  const { buttonText, question, options, numbered } = cardInfo;

  return (
    <div className="question">
      <h2 className="question__title">{question}</h2>
      {options && <Answer options={options} />}
      <SubmitButton text={buttonText} />
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
              <CheckmarkSvg />
            </span>
          </p>
        )}
      </button>
    );
  }

  function handleSubmit(event) {
    updateFocusedQuestion(event);
  }

  function CheckmarkSvg() {
    return (
      <svg height="13" width="16" fill="white">
        <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
      </svg>
    );
  }
}

export default Question;
