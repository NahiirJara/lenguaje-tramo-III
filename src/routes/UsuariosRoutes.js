const usuarioRouter = require('express').Router();
const { 
    verUsuarios,
    verUsuario,
    crearUsuarios,
    editarUsuarios,
    eliminarUsuarios

} = require('./../controllers/UsuarioController')


// ver usuarios
usuarioRouter.get('/usuarios', verUsuarios)
//ver usuario
usuarioRouter.get('/usuario', verUsuario)
//crear usuario
usuarioRouter.post('/usuario', crearUsuarios)

//editar usuario
usuarioRouter.put('/usuario', editarUsuarios)

//eliminar usuario

usuarioRouter.delete('/usuario', eliminarUsuarios)


module.export = usuarioRouter