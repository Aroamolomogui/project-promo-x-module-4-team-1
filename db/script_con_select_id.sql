INSERT INTO user (autor, job, photo) VALUES ("Delia", "Full Stack Developer", "url de la foto");

ALTER TABLE project ADD image text not null;

INSERT INTO project (name, slogan, technologies, repo, demo, `desc`, image) 
values ("Elegant Workspace", "Diseños Exclusivos", "React JS - HTML- CSS", "url repo", "url demo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis.", "url de la imagen");

select * from project;

ALTER TABLE project ADD COLUMN fkUser int;
ALTER TABLE project ADD foreign key (fkUser) 
references user (idUser);

SELECT project.name, user.autor
FROM project INNER JOIN user ON project.fkUser = user.idUser
WHERE user.idUser = 5 ;