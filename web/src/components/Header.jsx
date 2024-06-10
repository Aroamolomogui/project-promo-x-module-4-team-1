import companyLogo from "../images/laptop-code-solid.svg";
import logoSponsor from "../images/adalab_white.png";
function Header () {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src={ companyLogo }
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <a href="https://adalab.es/" target="_blank">
        <img className="logoSponsor" src={ logoSponsor } alt="Logo Adalab" />
      </a>

    </header>
  );
}

export default Header;
