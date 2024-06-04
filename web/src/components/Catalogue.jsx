import { useEffect, useState } from "react";


function Catalogue() {
  
const [listProject, setListProject] = useState ([]);

useEffect(()=>{
  fetch("http://localhost:5001/list")
  .then((response) => response.json())
  .then(info=> {
    setListProject(info.data)
  })
}, [])

    return <section className="catalogue">
      <h3 className="title__catalogue">Catálogo de Proyectos</h3>
     <article className="card__container">
      <div className="card__catalogue">Proyecto 1</div>
      <div className="card__catalogue">Proyecto 2</div>
      <div className="card__catalogue">Proyecto 3</div>
      <div className="card__catalogue">Proyecto 4</div>
      </article> 
    </section>;
  }
  
  export default Catalogue;
  