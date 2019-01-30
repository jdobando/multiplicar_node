const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '55';

let argv = process.argv;
let parametro = argv[2];
let base = parametro

// originalmente usaba parametro.split('=') [1] pero no reconoce la funcion


crearArchivo(base)
    .then(archivo => console.log(`Archivo Creado ${archivo}`))
    .catch(e => console.log(e));