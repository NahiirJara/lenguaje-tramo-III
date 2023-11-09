const express = require('express')
const server = express()
const port = 3000

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.get('/buscarUsuario', (req, res) => {
  const encontrado = true

  if (encontrado) {
    res.status(200).send('Status 200: El usuario fué encontrado');
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
