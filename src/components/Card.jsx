const Card = (props) => {
  return (
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div className="card__authorPhoto"></div>
        <p className="card__job"> {props.data.job || "Full stack Developer"}</p>
        <h3 className="card__name">
          {props.data.autor || "Emmelie Björklund"}
        </h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{props.data.name || "Elegant Workspace"}</h3>
        <p className="card__slogan">
          {props.data.slogan || "Diseños Exclusivos"}
        </p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">
          {props.data.desc ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipiscivitae ratione"}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {props.data.technologies || "React JS - HTML - CSS"}
          </p>

          <a
            className="icon icon__www"
            href={props.data.demo} //hacer validación
            title="Haz click para ver el proyecto online"
            target= '_blank'
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={`https://github.com/${props.data.repo}`} //hacer validación
            title="Haz click para ver el código del proyecto"
            target= '_blank'
          >
            GitHub link
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
