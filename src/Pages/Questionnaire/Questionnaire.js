import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Question from "../../components/Question/Question";
import questionnaireCards from "../../data/questionnaireData";
import "./Questionnaire.css";
import Result from "../../components/Result/Result";

function Questionnaire() {
  const [
    displayResult,
    setDisplayResult,
  ] = useState(false);
  const [
    focusedQuestionIndex,
    setFocusedQuestionIndex,
  ] = useState(
    JSON.parse(localStorage.lastAnswered || 0)
  );

  useEffect(() => {
    const questionnaireQuestionsContainer = document.querySelector(
      ".questionnaire__questions-container"
    );
    questionnaireQuestionsContainer.style = `transform: translateY(-${100 *
      focusedQuestionIndex}%)`;
  }, [focusedQuestionIndex]);

  return (
    <div className="questionnaire">
      <ProgressBar />
      <div className="questionnaire__questions-container">
        {questionnaireCards.map((card, index) => (
          <Question
            key={index}
            cardInfo={card}
            updateFocusedQuestion={
              updateFocusedQuestion
            }
            setDisplayResult={setDisplayResult}
          />
        ))}
      </div>
      {focusedQuestionIndex > 0 && (
        <CardNavigation />
      )}
      {displayResult && <Result />}
    </div>
  );

  function ProgressBar() {
    const amountOfQuestions =
      questionnaireCards.length;
    const questionProgressWidth =
      (100 / amountOfQuestions) *
      focusedQuestionIndex;

    return (
      <div className="questionnaire__progress-container">
        <div
          className="questionnaire__progress"
          style={{
            width: `${questionProgressWidth}%`,
          }}
        ></div>
      </div>
    );
  }

  function CardNavigation() {
    return (
      <div className="questionnaire__navigation">
        <button
          onClick={updateFocusedQuestion}
          id="questionanaire__nav-btn--prev"
          className="questionanaire__nav-btn"
        >
          <FontAwesomeIcon
            icon={faAngleUp}
            size="2x"
            color="white"
          />
        </button>
        {focusedQuestionIndex <=
          localStorage.lastAnswered && (
          <button
            onClick={updateFocusedQuestion}
            id="questionanaire__nav-btn--next"
            className="questionanaire__nav-btn"
          >
            <FontAwesomeIcon
              icon={faAngleDown}
              size="2x"
              color="white"
            />
          </button>
        )}
      </div>
    );
  }
  function updateFocusedQuestion({
    currentTarget,
  }) {
    // Clicked button identifier
    const isNextBtnClicked = currentTarget.id.includes(
      "next"
    );

    // Conditional variables
    const isBeforeEnd =
      focusedQuestionIndex + 1 <
      questionnaireCards.length;
    const isAfterStart =
      focusedQuestionIndex - 1 >= 0;

    // Checks if at start or end
    isNextBtnClicked
      ? isBeforeEnd &&
        setFocusedQuestionIndex(
          focusedQuestionIndex + 1
        )
      : isAfterStart &&
        setFocusedQuestionIndex(
          focusedQuestionIndex - 1
        );
  }
}

export default Questionnaire;
