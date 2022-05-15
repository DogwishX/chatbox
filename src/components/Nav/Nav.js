import useToggle from "../../hooks/useToggle";

import Logo from "./Logo/Logo";
import MenuIcon from "./MenuIcon/MenuIcon";
import MenuItems from "./MenuItems/MenuItems";
import "./Nav.css";

function Nav() {
  const [
    isMenuActive,
    toggleIsMenuActive,
  ] = useToggle(false);

  return (
    <nav>
      <Logo />
      <MenuIcon
        isMenuActive={isMenuActive}
        toggleIsMenuActive={toggleIsMenuActive}
      />
      <MenuItems isMenuActive={isMenuActive} />
    </nav>
  );
}

export default Nav;
