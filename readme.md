Evaluación del módulo 6
Proyecto: Node & Express Web App 



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



Por que se eligió "app.js"? 

Como se puede apreciar en el código, decidí utilizar "app.js" como nombre del archivo personal, porque posteriormente, se solciita crear una vista dinamica, la cual llamé index.ejs y considerando las buenas prácticas entre desarrolladores y la comprensión del proyecto no quise duplicar nombres de archivos.  



A continuación, se incorporan y configuran paquetes esenciales para el desarrollo de aplicaciones backend.

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


________________________________________________

 Ejecución del servidor

1 . Abrir la carpeta del proyecto con Visual Studio Code
2. Luego abrir la Terminal Git Bash
y ejecutamos: 
npm run dev

3. Debe aparecer lo siguiente si la entrada fue existosa: 

El servidor se ejecutará en:

http://localhost:3000

4. Hacer click en el servidor para visualizar la página dinámica que tambien puede dirigirte a la página estática. 

______________________________________________________


Integración Modulo 7 

ACTUALIZACIÓN README Proyecto Módulo 7 - Node.js & Express


Este proyecto corresponde a la segunda etapa del desarrollo backen solicitado, donde incorporamos a la aplicación creada en el Módulo 6, una base de datos relacional y operaciones CRUD utilizando Sequelize como ORM.

La aplicación permite gestionar usuarios, almacenando la información en una base de datos PostgreSQL y exponiendo rutas para crear, leer, actualizar y eliminar registros.

______________________

Herramientas utilizadas

* Node.js
* Express.js
* PostgreSQL
* Sequelize (ORM)
* EJS
* Dotenv

___________________________________

Instalación y ejecución
Para ejecutar el proyecto es necesario lo siguiente 

1. Clonar el repositorio:

git clone https://github.com/joNeira96/Proyecto_Modulo6.git

2. Instalar dependencias:

En la terminal bash
npm install


3. en el archivo “.env” modificar la contraseña: 
DB_PASS=tu_contraseña


4. Ejecutar el servidor:

En la terminal bash
npm run dev

Correcto: 
El servidor estará disponible en:
http://localhost:3000

Continuar con las pruebas correspondientes. 

 Funcionalidades implementadas

A.Módulo 6

* Servidor Express
* Rutas básicas
* Renderizado con EJS
* Registro de logs

B.Módulo 7

* Conexión a base de datos PostgreSQL
* Uso de Sequelize como ORM
* Modelo User
* CRUD completo de usuarios:

  * GET /usuarios
  * POST /usuarios
  * PUT /usuarios/:id
  * DELETE /usuarios/:id
* Validaciones en creación de usuarios
* Manejo de errores
* Filtro por query params (`?nombre=Juan`)
* Implementación de transacciones

---

C.Pruebas

Las rutas fueron probadas mediante Postman, verificando:

* Creación de usuarios
* Consulta de registros
* Actualización de datos
* Eliminación de registros

Las cuales se encuentran adjuntadas al Drive 

____________________________________________

 Estructura del proyecto


src/
 ├── config/
 ├── models/
 ├── routes/
 ├── views/
 ├── public/

_______________________________________________________
Conclusión
Durante este proyecto logramos integrar una base de datos real a la aplicación, permitiendo trabajar con persistencia de datos mediante un ORM. Sequelize nos ayudó a  la gestión de modelos y consultas, reduciendo la complejidad del uso de SQL directo.

Además, se implementaron buenas prácticas como validaciones, manejo de errores y organización modular del código.

