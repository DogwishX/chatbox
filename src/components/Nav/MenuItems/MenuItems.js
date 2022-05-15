import "./MenuItems.css";

function MenuItems({
  isMenuActive,
  toggleIsMenuActive,
}) {
  return (
    <ul
      className={`menu-items${
        isMenuActive ? " menu-items--active" : ""
      }`}
    >
      <li className="menu-items__item">
        <a
          className="menu-items__link"
          href="/questionnaire"
        >
          Questionário de Baumann
        </a>
      </li>
      <li className="menu-items__item">
        <a
          className="menu-items__link"
          href="/seca"
        >
          Pele Seca
        </a>
      </li>
      <li className="menu-items__item">
        <a
          className="menu-items__link"
          href="/oleosa"
        >
          Pele Oleosa
        </a>
      </li>
      <li className="menu-items__item">
        <a
          className="menu-items__link"
          href="/clareadores"
        >
          Clareadores
        </a>
      </li>
    </ul>
  );
}

export default MenuItems;
