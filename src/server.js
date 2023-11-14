require('dotenv').config() // variables de entorno que se traen de .env

const express = require('express')
const usuarioRouter = require ('./routes/UsuariosRoutes.js')

const app = express()
const port = 3000

app.use(usuarioRouter)

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto: ${port}`)
})

