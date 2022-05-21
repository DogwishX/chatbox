import toggleChat from "../../hooks/toggleChat";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image-container">
        <img className="hero__image" alt="background" />
      </div>
      <div className="hero__call-to-action">
        <h1 className="hero__title">Consulte agora</h1>
        <p className="hero__text">
          A escolha certa deixa sua pele bonita e te faz sentir segura!
          <br /> <br />
          Converse com a PICSKIN nossa conselheira virtual e acerte na escolha
        </p>
        <button className="hero__button" onClick={toggleChat}>
          Abrir o chat
        </button>
      </div>
    </div>
  );
}

export default Hero;
