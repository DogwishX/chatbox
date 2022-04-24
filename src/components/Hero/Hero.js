import heroBackgroundImg from "../../assets/hero-background-mobile.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        className="hero__image"
        src={heroBackgroundImg}
      />
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
