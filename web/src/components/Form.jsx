import Button from "./Button";
import PropTypes from "prop-types";
function Form ({
  changeInputData,
  updateAvatar,
  inputData,
  setInputData,
  createdCard,
  urlCard,
  hidden,
  setError
}) {
  const validationLinks = (input) => {
    return input.includes("https://") ? "hidden" : "";
  };

  const handleChange = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;
    changeInputData(id, value);
    localStorage.setItem("project", JSON.stringify(inputData));
  };
  const handleClick = () => {
    if (
      inputData.name !== "" &&
      inputData.slogan !== "" &&
      inputData.technologies !== "" &&
      inputData.repo !== "" &&
      inputData.demo !== "" &&
      inputData.desc !== "" &&
      inputData.autor !== "" &&
      inputData.job !== "" &&
      inputData.image !== "" &&
      inputData.photo !== ""
    ) {
      createdCard();
      localStorage.removeItem("project");
    } else {
      setError("Por favor, introduce todos los datos")
    }
  };

  return (
    <form
      className="addForm"
      onSubmit={ (ev) => {
        ev.preventDefault();
      } }
    >
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>

        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          onChange={ handleChange }
          value={ inputData.name }
          required
        />

        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={ handleChange }
          value={ inputData.slogan }
          required
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="https://tu-repositorio"
            onChange={ handleChange }
            value={ inputData.repo }
            required
          />
          <p className={ `validation-text ${validationLinks(inputData.repo)}` }>
            Introduce una URL válida
          </p>
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="https://tu-demo"
            onChange={ handleChange }
            value={ inputData.demo }
          />
          <p className={ `validation-text ${validationLinks(inputData.demo)}` }>
            Introduce una URL válida
          </p>
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={ handleChange }
          value={ inputData.technologies }
          required
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={ handleChange }
          value={ inputData.desc }
          maxLength="200"
          required
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          onChange={ handleChange }
          value={ inputData.autor }
          required
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={ handleChange }
          value={ inputData.job }
          required
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <Button
          text="Subir foto del proyecto"
          btnOther="image"
          updateAvatar={ updateAvatar }
          required
        />
        <Button
          text="Subir foto de la autora"
          btnOther="photo"
          updateAvatar={ updateAvatar }
          required
        />
        <button className="button--large on" onClick={ handleClick }>
          Guardar proyecto
        </button>
      </fieldset>
      <a href={ urlCard } className={ `url--message ${hidden}` } target="_blank">
        Mira tu tarjeta
      </a>
    </form>
  );
}

Form.propTypes = {
  inputData: PropTypes.object,
  changeInputData: PropTypes.func,
  updateAvatar: PropTypes.func,
  setInputData: PropTypes.func,
  createdCard: PropTypes.func,
  urlCard: PropTypes.string,
  hidden: PropTypes.string,
  setError: PropTypes.func
};
export default Form;
