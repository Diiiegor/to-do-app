const argv = require('./config/yargs').argv;
const {crear}=require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea=crear(argv.descripcion);
        console.log(tarea);
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
