const fs = require('fs');

let listadoPorHcer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHcer);

    //escribimos la tabla del 2 en un archivo externo
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

};

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHcer.push(porHacer);
    guardarDB();
    return porHacer
};

module.exports = {
    crear
};