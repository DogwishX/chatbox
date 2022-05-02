import { useState } from "react";
import "./Question.css";

function Question({ cardInfo }) {
  const [selectedOption, setSelectedOption] = useState();
  const { buttonText, question, options, numbered } = cardInfo;

  return (
    <div className="question">
      <h2 className="question__title">{question}</h2>
      {options && <Options />}
    </div>
  );

  function Options() {
    const optionNameMap = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
    };

    return (
      <ul className="answer__list">
        {options.map(({ value, text }, index) => (
          <li className="answer__item" data-value={value} key={value}>
            <p className="answer__prefix">{optionNameMap[index]}</p>
            {text}
          </li>
        ))}
      </ul>
    );
  }
}

export default Question;
