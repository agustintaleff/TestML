const http = require('http');
const colors = require('colors');

const ManejadorServer = function (req,res) {
    res.writeHead(200,{'Content-type':'Text/html'})
    res.write('<H1>Hola mundo 2</H1>');
    res.end;
}



const server =  http.createServer(ManejadorServer);

server.listen(3000,function () {
    console.log('La aplicacion corre en el puerto 3000'.green);
});


