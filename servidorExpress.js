const express = require('express')
const server = express()
const port = 3000

/* ---------------------FUNCIONES-------------------*/
function validarUsuario(req, res, next) {
	const usuarioValido = true; //cambiar este valor si el usuario es valido o no
	if (usuarioValido) {
		next();
	}else{
		res.status(401).send('El usuario no es válido') 
	}
}

/* ---------------------MIDDLEWARES-------------------*/

//server.use(validarUsuario); // comento porque afecta a todas las rutas
server.use(express.static('public')) //asigno ruta para archivos estaticos
/* ---------------------RUTAS-------------------*/
server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/panel', [validarUsuario], (req, res) => {

	try {
		res.send('Bienvenido al panel')
	} catch (error){
		res.status(500).send('Ocurrio un error en el panel..')
	}
    
})

server.get('/buscarUsuario', (req, res) => {
  const encontrado = true

  if (encontrado) {
    //no s ele pone el status porque por defecto es 200
    res.send('Status 200: El usuario fué encontrado');
  } else {
    res.status(404).send('Status 404: No se encontró el usuario');
  }
})

server.get('/200',(req, res) => {

   res.status(200).send('Status 200: OK');
})

server.get('/301',(req, res)=> {
  res.status(301).send('Status 301: La página se trasladó a otro lugar');
})

server.get('/400',(req, res)=> {
  res.status(400).send('Status 400: Bad request. Ocurrió un error');
})

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})


//npm nodemon: dependencia que hay que instalar para no tener que estar reiniciando el servidor cada vez que realizamos un cambio
