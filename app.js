const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log("Parametro Incorrecto");
        break;
}
//let base = '55';

// let argv2 = process.argv;

// console.log(`limite :`, argv.limite);


// console.log(argv2);


// let parametro = argv[2];
// let base = parametro.split('=')[1]

// originalmente usaba parametro.split('=') [1] pero no reconoce la funcion