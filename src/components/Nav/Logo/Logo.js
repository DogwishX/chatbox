import LogoImg from "../../../assets/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <a className="logo">
      <img
        className="logo__image"
        src={LogoImg}
      />
    </a>
  );
}

export default Logo;
