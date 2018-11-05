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

const cargarDB = () => {
    try {
        listadoPorHcer = require('../db/data.json');
    }
    catch (e) {
        listadoPorHcer = [];
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
const getListado = () => {
    cargarDB();
    return listadoPorHcer;
};

//actualiza la tarea
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    //buscamos el index de la tarea que tenga la descripcion ingresada, la funcion findindex retorna -1 en caso de no encontrar nongun elemento
    let index = listadoPorHcer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHcer[index].completado = completado;
        guardarDB();
        return true;
    }
    else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();

    let nuevoArreglo = listadoPorHcer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoArreglo.length === listadoPorHcer.length) {
        return false;
    }
    else {
        listadoPorHcer = nuevoArreglo;
        guardarDB();
        return true;
    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};