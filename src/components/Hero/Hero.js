import toggleChat from "../../hooks/toggleChat";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image-container">
        <img
          className="hero__image"
          alt="background"
        />
      </div>
      <div className="hero__call-to-action">
        <h1 className="hero__title">
          Consulte agora
        </h1>
        <p className="hero__text">
          Converse com a PicSkin, nossa
          especialista virtual.
        </p>
        <p
          className="hero__button"
          onClick={toggleChat}
        >
          Abrir o chat
        </p>
      </div>
    </div>
  );
}

export default Hero;
