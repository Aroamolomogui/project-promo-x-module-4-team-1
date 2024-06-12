import { useEffect, useState } from "react";

function Catalogue () {
  const [listProject, setListProject] = useState([]);

  useEffect(() => {
    fetch("https://project-promo-x-module-4-team-1-em81.onrender.com/list")
      .then((response) => response.json())
      .then((info) => {
        setListProject(info.data);
      });
  }, []);

  const html = listProject.map((item, i) => {
    return (
      <a className="card__link" href={ `https://project-promo-x-module-4-team-1-em81.onrender.com/detailProject/${item.idUser}` } key={ i }>
        <article className="card__catalogue">

          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto">{item.photo && <img className="card__authorPhoto--img" src={item.photo} alt="" />}
            </div>
            <p className="card__job">
              { item.job }
            </p>
            <h3 className="card__name">{ item.autor }</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">{ item.name }</h3>
            <p className="card__slogan">{ item.slogan }</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">{ item.desc }</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{ item.technologies }</p>

              <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online">
                { item.demo }
              </a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto">
                { item.repo }
              </a>
            </div>
          </div>

        </article>
      </a>

      //   <div key={i} className="card__catalogue">
      //     <p> Nombre de la autora: {item.autor}</p>
      //   </div>
    );
  });
  return (
    <section className="catalogue">
      <h3 className="title__catalogue">Catálogo de Proyectos</h3>
      <article className="card__container">{ html }</article>
    </section>
  );
}

export default Catalogue;
