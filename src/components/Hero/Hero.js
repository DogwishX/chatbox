import heroBackgroundImg from "../../assets/hero-background-mobile.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        className="hero__image"
        src={heroBackgroundImg}
      />
      <h1 className="hero__title">
        Consulte agora
      </h1>
      <p className="hero__text">
        Converse com a DermaBot,
        <br /> nossa especialista virtual.
      </p>
      <a
        className="hero__button"
        href="#"
        onClick={toggleChat}
      >
        Abrir o chat
      </a>
    </div>
  );
}

function toggleChat() {
  const chatBox = document.querySelector(
    ".chatbox-container"
  );
  chatBox.classList.toggle(
    "chatbox-container--active"
  );
}
export default Hero;
