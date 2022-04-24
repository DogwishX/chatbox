import heroBackgroundImg from "../../assets/hero-background-mobile.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        className="hero__image"
        src={heroBackgroundImg}
      />
      <a className="hero__button" href="#">
        Learn More
      </a>
    </div>
  );
}

export default Hero;
