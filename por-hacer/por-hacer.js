const fs = require('fs');

let listadoPorHcer = [];

const guardarDB = () => {
    cargarDB();
    let data = JSON.stringify(listadoPorHcer);
    //escribimos la tabla del 2 en un archivo externo
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

};

const cargarDB=()=>{
    try{
        listadoPorHcer=require('../db/data.json');
    }
    catch (e) {
        listadoPorHcer=[];
    }
};

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHcer.push(porHacer);
    guardarDB();
    return porHacer
};

//trae el listado de elementos del archivo .json
const getListado=()=>{
    cargarDB();
    return listadoPorHcer;
};

module.exports = {
    crear,
    getListado
};