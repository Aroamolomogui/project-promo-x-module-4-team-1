import PropTypes from "prop-types";
const Card = ({inputData}) => {
  return (
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div className="card__authorPhoto"><img className="card__authorPhoto--img" src={inputData.photo} alt="" />
            
            </div>
        <p className="card__job"> {inputData.job || "Full stack Developer"}</p>
        <h3 className="card__name">
          {inputData.autor || "Emmelie Björklund"}
        </h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{inputData.name || "Elegant Workspace"}</h3>
        <p className="card__slogan">
          {inputData.slogan || "Diseños Exclusivos"}
        </p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">
          {inputData.desc ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipiscivitae ratione"}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {inputData.technologies || "React JS - HTML - CSS"}
          </p>

          <a
            className="icon icon__www"
            href={inputData.demo} //hacer validación
            title="Haz click para ver el proyecto online"
            target= '_blank'
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={`https://github.com/${inputData.repo}`} //hacer validación
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

Card.propTypes = {
    inputData: PropTypes.object
}

export default Card;
