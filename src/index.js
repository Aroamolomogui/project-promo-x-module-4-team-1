const express = require('express');

//crear el servidor
const server = express();
const port = 5001;

server.listen(port, ()=>{
    console.log(`El servidor se esta ejecutando en el purto ${port}`);
});

const staticUrl= './src/public';
server.use(express.static(staticUrl));