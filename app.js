const argv = require('./config/yargs').argv;
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("crear nueva tarea");
        break;
    case 'listar':
        console.log("Listar tareas");
        break;
    case 'actualizar':
        console.log("Actualizar tarea tarea");
        break;
    default:
        console.log("EL comando no es reconocido");
}
