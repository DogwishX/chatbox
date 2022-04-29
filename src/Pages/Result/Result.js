import resultImg from "../../assets/result.jpg";
import ProductSection from "../../components/ProductSection/ProductSection";
import "./Result.css";
// const skinTypes = {}

function Result({ selectedSkinType }) {
  return (
    <div className="result">
      <img
        className="result__image"
        src={resultImg}
      />
      <h1 className="result__title">
        Nossas recomendacoes
      </h1>
      <p className="result__text">
        Estes produtos foram recomendados por
        nossos especialistas para o seu tipo de
        pele:
        <em>
          "Oleosa, Sensivel, Pigmentada e
          Enrugada"
        </em>
      </p>
      <ProductSection
        title="Sabonetes"
        images={[
          require("../../assets/soap1.jpg"),
          require("../../assets/soap2.jpg"),
          require("../../assets/soap3.jpg"),
          require("../../assets/soap1.jpg"),
          require("../../assets/soap2.jpg"),
          require("../../assets/soap3.jpg"),
        ]}
      />
      <ProductSection
        title="Vitamina C"
        images={[
          require("../../assets/soap1.jpg"),
          require("../../assets/soap2.jpg"),
          require("../../assets/soap3.jpg"),
          require("../../assets/soap1.jpg"),
          require("../../assets/soap2.jpg"),
          require("../../assets/soap3.jpg"),
        ]}
      />
      <ProductSection
        title="Sabonetes"
        images={[
          require("../../assets/soap1.jpg"),
          require("../../assets/soap2.jpg"),
          require("../../assets/soap3.jpg"),
          require("../../assets/soap1.jpg"),
          require("../../assets/soap2.jpg"),
          require("../../assets/soap3.jpg"),
        ]}
      />
    </div>
  );
}

export default Result;
