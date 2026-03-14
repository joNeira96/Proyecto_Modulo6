Evaluación del módulo 6
Proyecto: Node & Express Web App 

Leccion 1 

Comenzaremos la presentacion de este proyecto conociendo Node y Express para comprender su entorno y el rol que cumplen en el desarrollo de el backend moderno. 

Que es Node.js y para que se utiliza? 

Node.js es un entorno de ejecucion de JavaScript para crear aplicaciones en el backend, nos permite crear sevidores web, desarrollar API's, manejar archivos y base de datos y tambien aplicaciones en tiempo real. 

Que aporta Express sobre Node.Js? 

Por otro lado, Express es un framework de Node.js que facilitar crear estos servidores y API's. Nos ayuda a utilizar menos códido, aporta con un sistema de rutas mas simple y una estructura mas clara. 

Ejemplo: 

Cliente (Navegador)
        │
        │ 1. Solicitud HTTP
        ▼
Servidor Node.js
        │
        │ 2. Express recibe la ruta
        ▼
Ruta / API
        │
        │ 3. Procesa la petición
        ▼
Respuesta del servidor
        │
        │ 4. Envía datos
        ▼
Cliente recibe respuesta 


Y es así como estas dos herramientas se complementan permitiendonos, simplificar el trabajo en nuestras aplicaciones webs 


Leccion 2

Por que se eligió "app.js"? 

Como se puede apreciar en el código, decidí utilizar "app.js" como nombre del archivo personal, porque posteriormente, se solciita crear una vista dinamica, la cual llamé index.ejs y considerando las buenas prácticas entre desarrolladores y la comprensión del proyecto no quise duplicar nombres de archivos.  

Leccion 3 

A continuación, se incorporan y configuran paquetes esenciales para el desarrollo de aplicaciones backend.

---

Dependencias utilizadas

1. Express
Se ejecuta en la terminal Git Bash con:

npm install express

2. Dotenv
Se ejecuta en la terminal Git Bash con:

npm install dotenv

3. Nodemon

Se instaló como "devDependency":

npm install nodemon --save-dev

Y a su vez se configuraron los scripts del proyecto en "package.json": 

"start": "node app.js", 
 "dev": "nodemon app.js",

Ejecuta el servidor utilizando "nodemon", permitiendo reinicios automáticos durante el desarrollo.

 "devDependencies": 
    "nodemon": "^3.1.14"

En conclusión, en este proyecto se implementamos un servidor backend utilizando Node.js y Express.
Creando rutas públicas para servir contenido HTML y JSON, además de
archivos estáticos desde la carpeta public.

También se implementó persistencia simple mediante archivos planos utilizando
el módulo fs, registrando accesos en log.txt con fecha, hora y ruta.

Utilizamos EJS como motor de plantillas para generar vistas dinámicas y
se organizó el proyecto utilizando rutas externas para mejorar la
estructura del código.
