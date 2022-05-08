import "./Result.css";

function Result() {
  return (
    <div className="result">
      <p className="result__text">
        Parabens por ter completado o questionario! <br />
        Nos conseguimos identificar seu tipo de pele como:
        <em>"{calculateResults()}"</em>
      </p>
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
      option1: "sensivel",
      option2: "resistente",
    });

    // PigmentedOrNonPigmented results
    calculateSkinSectionScore(skinType, {
      section: "pigmentedOrNonPigmented",
      thresholdValue: 29,
      option1: "pigmentada",
      option2: "não-pigmentada",
    });

    return skinType.join(", ");
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
