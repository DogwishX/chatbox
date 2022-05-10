import { useEffect, useState } from "react";
import "./Result.css";

function Result() {
  const [skinType, setSkinType] = useState("");
  const [skinURL, setSkinURL] = useState("");

  useEffect(() => {
    const skinTypeResult = calculateResults();
    // Extract first character from each result item and form the url based on that
    const skinTypeURL = skinTypeResult
      .map((item) => item.toString().toLowerCase()[0])
      .join("");
    setSkinType(skinTypeResult.join(", "));
    setSkinURL(skinTypeURL);
  }, []);

  return (
    <div className="result">
      <div className="result__overlay"></div>
      <div className="result__content">
        <h2 className="result__title">Parabéns!</h2>
        <p className="result__text">
          Nós conseguimos identificar seu tipo de pele como:
          <em className="result__skin-type">"{skinType}"</em>
          Criamos uma pagina especialmente para você!
        </p>
        <p className="result__call-to-action">
          <a className="result__link" href={skinURL}>
            Clique aqui
          </a>{" "}
          para acessar a página de produtos para o seu tipo de pele.
        </p>
      </div>
    </div>
  );

  function calculateResults() {
    const skinType = [];

    // OilyOrDry results
    calculateSkinSectionScore(skinType, {
      section: "oilyOrDry",
      thresholdValue: 27,
      option1: "Oleosa",
      option2: "Seca",
    });

    // SensitiveOrResistant results
    calculateSkinSectionScore(skinType, {
      section: "sensitiveOrResistant",
      thresholdValue: 29,
      option1: "sensível",
      option2: "resistente",
    });

    // PigmentedOrNonPigmented results
    calculateSkinSectionScore(skinType, {
      section: "pigmentedOrNonPigmented",
      thresholdValue: 29,
      option1: "pigmentada",
      option2: "não-pigmentada",
    });

    // WrinkledOrTight results
    calculateSkinSectionScore(skinType, {
      section: "wrinkledOrTight",
      thresholdValue: 40,
      option1: "com tendência a rugas",
      option2: "firme",
    });
    return skinType;
  }

  function calculateSkinSectionScore(skinType, props) {
    const { section, thresholdValue, option1, option2 } = props;
    const sectionScore = sumOfValues(section);
    const option1OrOption2 = sectionScore > thresholdValue ? option1 : option2;
    skinType.push(option1OrOption2);
  }

  function sumOfValues(section) {
    const sectionObj = JSON.parse(localStorage[section]);
    const answerArr = Object.values(sectionObj);

    return answerArr.map(({ value }) => value).reduce((a, b) => a + b);
  }
}

export default Result;
