import "./MenuItems.css";

function MenuItems({ isMenuActive, toggleIsMenuActive }) {
  return (
    <ul className="menu-items">
      <li className="menu-items">
        <a href="/questionnaire">Questionário de Baumann</a>
      </li>
      <li className="menu-items">
        <a href="/seca">Pele Seca</a>
      </li>
      <li className="menu-items">
        <a href="/oleosa">Pele Oleosa</a>
      </li>
      <li className="menu-items">
        <a href="/clareadores">Clareadores</a>
      </li>
    </ul>
  );
}

export default MenuItems;
