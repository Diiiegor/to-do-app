const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tare apor hacer'
};

const completado = {
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tare ade la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {argv};
