const express = require('express');
const cors = require('cors');

//crear el servidor
const server = express();
server.use(cors());
const port = 5001;

server.get('/list',(req, res) => {

    const project =[{
        name: "Otilia",
        slogan: "Diseños exclusivos",
        technologies: "React",
        repo: "/blabla",
        demo: "/blabla",
        desc: "Un proyecto que es simple y llanamente mazo guay",
        autor: "Fulanita de tal",
        job: "Programadora",
        image: "#",
        photo: "#",

        
    }, {
        name: "Proyecto 1",
        slogan: "Solución innovadora para la productividad",
        technologies: "React, Node.js, MongoDB",
        repo: "https://github.com/usuario/proyecto1",
        demo: "https://proyecto1.com",
        desc: "Este proyecto es una aplicación web que ayuda a mejorar la gestión del tiempo y la organización de tareas.",
        autor: "Juan Pérez",
        job: "Desarrollador front-end",
        image: "proyecto1.png",
        photo: "juan_perez.jpg"

        
    }, {
        name: "Aplicación de Clima",
        slogan: "Consulta el tiempo en cualquier lugar",
        technologies: "Vue.js, API de Clima",
        repo: "https://github.com/usuario/app-clima",
        demo: "https://app-clima.com",
        desc: "Esta aplicación te permite consultar el pronóstico del tiempo en diferentes ciudades.",
        autor: "María Gómez",
        job: "Desarrolladora full-stack",
        image: "app-clima.png",
        photo: "maria_gomez.jpg"

        
    }];


res.json({data: project, count: project.length, success:true
})
});
server.listen(port, ()=>{
    console.log(`El servidor se esta ejecutando en el purto ${port}`);
});

const staticUrl= './src/public';
server.use(express.static(staticUrl));