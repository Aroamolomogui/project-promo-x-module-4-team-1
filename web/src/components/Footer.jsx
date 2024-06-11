import logoSponsor from "../images/adalab_white.png";
const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://adalab.es/" target="_blank">
        <img className="logoSponsor" src={ logoSponsor } alt="Logo Adalab" />
      </a>
    </footer>
  )
}

export default Footer