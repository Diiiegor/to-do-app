const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tare apor hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tare apor hacer'
        },
        completado: {
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Elimina una tare ade la lista', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tare apor hacer'
        }
    })
    .help()
    .argv;

module.exports = {argv};
