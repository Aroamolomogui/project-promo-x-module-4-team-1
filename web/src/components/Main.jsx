import CardPreview from "./CardPreview";
import Form from "./Form";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    //con esta función estoy actualizando el objeto de cada input
    setInputData({ ...inputData, [idInput]: valueInput });
  };

  const updateAvatar = (url, idInput) => {
    setInputData({ ...inputData, [idInput]: url });
  };
  const createCard = () => {
    fetch("https://project-promo-x-module-4-team-1-em81.onrender.com/addProject", {
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
          setUrlCard(dataResponse.cardUrl);
          setHidden("");
          setError("");
          setInputData({
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
        } else {
          setError(dataResponse.error);
        }
      });
  };

  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Link to="/catalogue" >
          <button className="button--link">Ver proyectos</button>
        </Link>
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
        setError={ setError }
      />
      <section className={ error === "" ? "hidden" : "error" }>
        { error }
      </section>
    </main>
  );

}

export default Main;
