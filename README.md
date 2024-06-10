# Proyecto: Página de Presentación de Proyectos con React

## Descripción del Proyecto

En este proyecto vamos a desarrollar una aplicación web que permite crear una página para hablar sobre un proyecto personal o uno que nos interese mucho. La aplicación permitirá introducir los datos del proyecto y obtener una vista maquetada con esta información.

## Objetivos

- **Identificación y Generación de Componentes**: Saber identificar y generar los componentes de una página, separarlos y crear componentes visualmente similares.
- **Uso de React**: Aprender a usar React para crear una aplicación web sencilla.
- **Documentación de Librerías Externas**: Aprender a buscar información en la documentación de librerías externas.
- **Implementación de Scrum**: Implementar Scrum como marco de referencia para el desarrollo del producto, basándonos siempre en los valores de Agile como puntos clave del trabajo en equipo y la mejora continua.
- **Comunicación del Equipo**: Mejorar la comunicación entre los miembros del equipo.
- **Habilidades de Comunicación en Público**: Mejorar vuestras habilidades de comunicación en público al exponer el proyecto en la sesión final.

## Caso de Uso

Con esta web podréis mostrar que, además de maquetar, podéis crear una página web utilizando React JS. Esto os permitirá mostrar vuestras habilidades a la hora de trabajar con React JS en GitHub, algo muy valorado en las empresas a la hora de escoger candidatas para puestos de desarrolladoras web.

## Especificaciones Técnicas

En el desarrollo de esta aplicación web utilizaremos las siguientes tecnologías:

- **Sass**: Para los estilos.
- **Media Queries**: Para que el diseño sea adaptable al dispositivo.
- **React**: Para la estructuración en componentes de la aplicación.
- **Estrategia Mobile First**: Desarrollo con un enfoque Mobile First.
- **Git**: Para el control de versiones del proyecto, utilizando ramas y pull-requests para revisar los cambios de las compañeras.
- **GitHub Pages**: Para la publicación del resultado en Internet.

## Funcionamiento de la Aplicación

La aplicación permitirá a la usuaria introducir la información en un formulario, y este texto se mostrará maquetado automáticamente en una tarjeta con la información del proyecto. La tarjeta del proyecto tendrá los siguientes campos:

- **Nombre del Proyecto** (`name`)
- **Slogan del Proyecto** (`slogan`)
- **Tecnologías** (`technologies`)
- **Repositorio** (`repo`)
- **Demo** (`demo`)
- **Descripción** (`desc`)
- **Nombre de la Autora** (`autor`)
- **Trabajo de la Autora** (`job`)
- **Foto de la Autora** (`image`)
- **Foto del Proyecto** (`photo`)

### Interacción con la Web

- Los campos deberán tener restricciones para su formato indicado.
- Las modificaciones en el formulario (diseño y contenido) aparecerán automáticamente en la vista previa de la tarjeta del proyecto.
- Toda la información del formulario se almacenará en `localStorage`, de manera que al recargar la página siga disponible.
- Al hacer clic en el botón de "Crear Tarjeta", se enviará el formulario (`submit`) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellenada.
- Se mostrará esta URL para que la usuaria verifique si la tarjeta está bien definida.



