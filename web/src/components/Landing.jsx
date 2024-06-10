import { Link } from "react-router-dom";
import "../styles/App.scss";

function Landing () {
  return (
    <>
      <main className="main--landing">
        <h1 className="title">Mis proyectos molones</h1>
        <p className="title--landing">Escaparate en línea para recoger ideas a través de la tecnología.</p>

        <div className="button--landing">
          <Link to="/main" >
            <button className="button--link__landing">Nuevo proyecto</button>
          </Link>
          <Link to="/catalogue" >
            <button className="button--link__landing">Catálogo de Proyectos</button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Landing