import LogoImg from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link className="logo" to={"/"}>
      <img
        className="logo__image"
        src={LogoImg}
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
