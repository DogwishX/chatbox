import praticidadeImg from "../../assets/praticidade.jpg";
import gastosImg from "../../assets/gastos.png";
import confiavelImg from "../../assets/confiavel.jpg";
import "./Cards.css";

function Cards() {
  return (
    <ul className="cards">
      <li className="cards__item">
        <img
          className="cards__image"
          src={praticidadeImg}
        />
        <h3 className="cards__title">
          Praticidade na escolha dos produtos
        </h3>
        <p className="cards__description">
          Tornando sua vida mais fácil
        </p>
      </li>

      <li className="cards__item">
        <img
          className="cards__image"
          src={confiavelImg}
        />
        <h3 className="cards__title">
          Confiável
        </h3>
        <p className="cards__description">
          Utilizamos uma escala dermatológica para
          descobrir seu tipo de pele
        </p>
      </li>
      <li className="cards__item">
        <img
          className="cards__image"
          src={gastosImg}
        />
        <h3 className="cards__title">
          Sem custos
        </h3>
        <p className="cards__description">
          Acesse a hora que quiser sem gerar
          gastos.
        </p>
      </li>
    </ul>
  );
}

export default Cards;
