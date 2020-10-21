const fs = require('fs');

fs.writeFile('texto.txt','Linea 1 (uno)',function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo crerado correctamente');
    }    
})