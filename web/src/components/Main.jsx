import CardPreview from "./CardPreview";
import Form from "./Form";
import { useState } from "react";

function Main () {
  const [inputData, setInputData] = useState({
    //creamos variable de estado y sus propiedades
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  const [urlCard, setUrlCard] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [error, setError] = useState("");
  //creamos una función para recoger y actualizar los datos que introduce la usuaria en los inputs
  const changeInputData = (idInput, valueInput) => {
    //con esta función estoy actualizando el objeto de cada input //
    setInputData({ ...inputData, [idInput]: valueInput });
  };

  const updateAvatar = (url, idInput) => {
    setInputData({ ...inputData, [idInput]: url });
  };
  const createCard = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        if (dataResponse.success) {
          setUrlCard(dataResponse.cardURL);
          setHidden("");
          setError("");
        } else {
          setError(dataResponse.error);
        }

      });
  };

  //Validación campos formularios
  const dataError = () => {
    //se crea un array vacío llamado errorMessages que se utilizará para almacenar los mensajes de error
    const errorMessages = [];

    //Si una condición se cumple (por ejemplo, error.includes("name")), se agrega un elemento <span> con el mensaje de error correspondiente al array errorMessages utilizando el método push().

    if (error.includes("name")) {
      errorMessages.push(<span>El campo Nombre del proyecto es obligatorio.</span>);
    }
    if (error.includes("slogan")) {
      errorMessages.push(<span>El campo Slogan es obligatorio.</span>);
    }
    if (error.includes("technologies")) {
      errorMessages.push(<span>El campo Tecnologías es obligatorio.</span>);
    }
    if (error.includes("repo")) {
      errorMessages.push(<span>El campo nombre-de-tu-repositorio es obligatorio.</span>);
    }
    if (error.includes("demo")) {
      errorMessages.push(<span>El campo Demo es obligatorio.</span>);
    }
    if (error.includes("desc")) {
      errorMessages.push(<span>El campo Descripción es obligatorio.</span>);
    }
    if (error.includes("autor")) {
      errorMessages.push(<span>El campo Nombre es obligatorio.</span>);
    }
    if (error.includes("job")) {
      errorMessages.push(<span>El campo Trabajo es obligatorio.</span>);
    }
    if (error.includes("image")) {
      errorMessages.push(<span>Debes subir una foto de tu proyecto.</span>);
    }
    if (error.includes("photo")) {
      errorMessages.push(<span>Debes subir una foto de la autora.</span>);
    }

    // la función devuelve el array errorMessages que contiene todos los mensajes de error que se han generado
    return errorMessages;
  };

  const errorMessage = dataError();

  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <a className="button--link" href="./">
          Ver proyectos
        </a>
      </section>
      <CardPreview inputData={ inputData } />
      <Form
        changeInputData={ changeInputData }
        updateAvatar={ updateAvatar }
        inputData={ inputData }
        setInputData={ setInputData }
        createdCard={ createCard }
        urlCard={ urlCard }
        hidden={ hidden }
      />
      <section className={ error === "" ? "hidden" : "error" }>
        { errorMessage.map((item, index) => (
          <div key={ index }>{ item }</div>
        )) }
      </section>
    </main>
  );

}

export default Main;
