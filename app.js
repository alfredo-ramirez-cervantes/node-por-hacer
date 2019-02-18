
// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch( comando ){

    case 'crear':
    porHacer.crear();
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();

        for( let tarea of listado){
            console.log('========= Por hacer ========='.green);
            console.log(tarea.descripcion);
            console.log('estado: ',  tarea.completado);            
            console.log('============================='.green);
        }        
    break;
    
    case 'actualizar':

        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
         console.log(actualizar);
        // console.log('Actualizar una tares por hacer');
    break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
         console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido');

}
