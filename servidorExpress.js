const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})


//npm nodemon: dependencia que hay que instalar para no tener que estar reiniciando el servidor cada vez que realizamos un cambio
