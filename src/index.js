const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//crear el servidor
const server = express();
server.use(cors());
server.use(express.json({limit: '15mb'}));
const port = 5001;

//conectarme a la base de datos
async function connectDB() {
  const conex = await mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_AdaPro",
    password: "8&Kvk38?33n$#*m",
    database: "freedb_AdaProTeams",
  });
  await conex.connect();
  return conex;
}

//endpoint que nos muestra todos los proyectos
server.get("/list", async (req, res) => {
  // const project =[{
  //     name: "Otilia",
  //     slogan: "Diseños exclusivos",
  //     technologies: "React",
  //     repo: "/blabla",
  //     demo: "/blabla",
  //     desc: "Un proyecto que es simple y llanamente mazo guay",
  //     autor: "Fulanita de tal",
  //     job: "Programadora",
  //     image: "#",
  //     photo: "#",

  // }, {
  //     name: "Proyecto 1",
  //     slogan: "Solución innovadora para la productividad",
  //     technologies: "React, Node.js, MongoDB",
  //     repo: "https://github.com/usuario/proyecto1",
  //     demo: "https://proyecto1.com",
  //     desc: "Este proyecto es una aplicación web que ayuda a mejorar la gestión del tiempo y la organización de tareas.",
  //     autor: "Juan Pérez",
  //     job: "Desarrollador front-end",
  //     image: "proyecto1.png",
  //     photo: "juan_perez.jpg"

  // }, {
  //     name: "Aplicación de Clima",
  //     slogan: "Consulta el tiempo en cualquier lugar",
  //     technologies: "Vue.js, API de Clima",
  //     repo: "https://github.com/usuario/app-clima",
  //     demo: "https://app-clima.com",
  //     desc: "Esta aplicación te permite consultar el pronóstico del tiempo en diferentes ciudades.",
  //     autor: "María Gómez",
  //     job: "Desarrolladora full-stack",
  //     image: "app-clima.png",
  //     photo: "maria_gomez.jpg"
  // }];
  const conn = await connectDB();
  const select = `SELECT * FROM project INNER JOIN user ON project.fkUser = user.idUser;`;
  const [results] = await conn.query(select);
  res.json({ data: results, success: true });

  conn.end();
});

//clicar btn de guardar proyecto
server.post("/addProject", async (req, res) => {
  const data = req.body;
  const conn = await connectDB();
  const insertAuthor = `INSERT INTO user (autor, job, photo) VALUES (?,?,?);`;
  const [resultsAuthor] = await conn.query(insertAuthor, [
    data.autor,
    data.job,
    data.photo,
  ]);
  const insertProject =
    "INSERT INTO project (name, slogan, technologies, repo, demo, `desc`, image, fkUser) values(?,?,?,?,?,?,?,?)";
  const [resultsProject] = await conn.query(insertProject, [
    data.name,
    data.slogan,
    data.technologies,
    data.repo,
    data.demo,
    data.desc,
    data.image,
    resultsAuthor.insertId,
  ]);

  res.json({
    cardUrl: `http//localhost:5001/${resultsAuthor.insertId}`,
    success: true,
  });
  conn.end();
});

// //motores de plantilla
// server.get("/detailProject", ()=>{
//     //renderizar la pagina del detalle desde el servidor
// })
server.listen(port, () => {
  console.log(
    `El servidor se esta ejecutando en el puerto http://localhost:${port}/`
  );
});

const staticUrl = "./src/public";
server.use(express.static(staticUrl));
