const { ifError } = require('assert');
const fs = require('fs');

fs.readFile('./texto.txt', function (err,datos) {
    if (err) {
        console.log('Error de lectura');
    } else {
        console.log(datos.toString());
    }
    
})