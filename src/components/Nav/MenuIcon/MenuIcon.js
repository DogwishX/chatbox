import "./MenuIcon.css";

function MenuIcon({ isMenuActive, toggleIsMenuActive }) {
  return (
    <div
      className={`menu-icon${isMenuActive ? " menu-icon--active" : ""}`}
      onClick={toggleIsMenuActive}
    >
      <span className="menu-icon--top"></span>
      <span className="menu-icon--mid"></span>
      <span className="menu-icon--bot"></span>
    </div>
  );
}

export default MenuIcon;
