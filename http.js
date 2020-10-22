const http = require('http');
const colors = require('colors');

const ManejadorServer = function (req,res) {
    res.writeHead(200,{'Content-type':'Text/html'})
    res.write('<H1>Dani balazo</H1>');
    res.write('<H1>Hola puto 2</H1>');
    res.write('<H1>Agus Sobala</H1>');
    res.write('<H1>Colorado Ladron</H1>');
    res.write('<H1>Semilla Ladron</H1>');
    res.write('<H1>Luis colectivero</H1>');
    res.write('<H1>Geral Ratatouille</H1>');
    res.write('<H1>Nerius Cubano Balsero</H1>');
    res.end;
}



const server =  http.createServer(ManejadorServer);

server.listen(3000,function () {
    console.log('La aplicacion corre en el puerto 3000'.green);
});


