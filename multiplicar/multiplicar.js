const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('============================'.red);
    console.log(`===  TABLA DEL ${base}  ====`.green);
    console.log('============================'.white);


    for (i = 1; i <= limite; i++)
        console.log(`base = ${base}  * ${i} = ${base * i} \n `);
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('ERROR !!!,BASE NO ES UN NUMERO ')
            return;
        }

        let data = ''


        for (i = 1; i <= limite; i++) {
            data += ` ${ i }  X ${base}  = ${(base * i)}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-limite-${limite}.txt`.red);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}