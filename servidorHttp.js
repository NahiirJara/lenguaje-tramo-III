const http = require('node:http'); //importamos http de node.js

//creamos servidor

const PORT = 3000;

const servidor = http.createServer(); //http lo importe en la linea 1

servidor.listen(PORT, function() {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

// enrutamiento


