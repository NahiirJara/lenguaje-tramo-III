require('dotenv').config() // variables de entorno que se traen de .env

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto: ${port}`)
})

