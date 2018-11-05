const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crear,getListado,actualizar}=require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea=crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado=getListado();

        for (let tarea of listado){
            console.log("==============por hacer=========".green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log("=======================================".green);
        }

        break;
    case 'actualizar':
        let actualizado=actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;
    default:
        console.log("EL comando no es reconocido");
}
