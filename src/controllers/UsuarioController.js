const usuariosController = {}
const lista_usuarios = [
    { nombre: 'Juan' },
    { nombre: 'Carlos' }
]
// ver usuarios
usuariosController.verUsuarios = (req, res) => {
   return res.json(lista_usuarios)
}
//ver usuario
usuariosController.verUsuario = (req, res) => {
    //return res.json()
}
//crear usuario
usuariosController.crearUsuarios = (req, res) => {
   // return res.json()
}
//editar usuario
usuariosController.editarUsuarios = (req, res) => {
    //return res.json()
}
//eliminar usuario
usuariosController.eliminarUsuarios = (req, res) => {
   // return res.json()
}

module.exports = usuariosController