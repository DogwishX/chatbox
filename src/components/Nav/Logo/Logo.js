import LogoImg from "../../../assets/logo.svg";
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
