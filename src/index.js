const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();
//crear el servidor

const server = express();
server.use(cors());
server.use(express.json({ limit: '15mb' }));
const port = 5001;
server.set('view engine', 'ejs');
//conectarme a la base de datos
async function connectDB() {
	const conex = await mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_DATABASE,
	});
	await conex.connect();
	return conex;
}

//endpoint que nos muestra todos los proyectos
server.get('/list', async (req, res) => {
	const conn = await connectDB();
	const select = `SELECT * FROM project INNER JOIN user ON project.fkUser = user.idUser;`;
	const [results] = await conn.query(select);
	res.json({ data: results, success: true });

	conn.end();
});

//clicar btn de guardar proyecto
server.post('/addProject', async (req, res) => {
	const data = req.body;
	const conn = await connectDB();
	const insertAuthor = `INSERT INTO user (autor, job, photo) VALUES (?,?,?);`;
	const [resultsAuthor] = await conn.query(insertAuthor, [
		data.autor,
		data.job,
		data.photo,
	]);
	const insertProject =
		'INSERT INTO project (name, slogan, technologies, repo, demo, `desc`, image, fkUser) values(?,?,?,?,?,?,?,?)';
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
		cardUrl: `https://project-promo-x-module-4-team-1-em81.onrender.com/detailProject/${resultsAuthor.insertId}`,
		success: true,
	});
	conn.end();
});

// //motores de plantilla
server.get('/detailProject/:id', async (req, res) => {
	const conn = await connectDB();
	const { id } = req.params;
	const findProject = `SELECT * FROM project INNER JOIN user ON project.fkUser = user.idUser WHERE user.idUser = ?`;
	const [resultsProject] = await conn.query(findProject, [id]);

	res.render('project', { details: resultsProject[0] });
	console.log(resultsProject);
});
server.listen(port, () => {
	console.log(
		`El servidor se esta ejecutando en el puerto http://localhost:${port}/`
	);
});

const staticUrl = './src/public';
server.use(express.static(staticUrl));
server.use(express.static('./src/css'));
server.use(express.static('./src/images'));
