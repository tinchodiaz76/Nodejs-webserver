const http= require('http');

const server= http.createServer((req, res)=>{
    //res.write('hola mundo');

    console.log(req);

    res.writeHead(200); //Respuesta exitosa 200
                        //Respuesta Unauthorizations 401

    //res.writeHead(200 , {'Content-Type': 'text/plain'}) //Devuelve un archivo plano
/*    
    res.writeHead(200 , {'Content-Type': 'application/json'})   //Devuelve un JSON
    const persona={
        nombre:'Martin',
        apellido:'Diaz'
    };
    res.write(JSON.stringify(persona));
/*    

/*
    res.writeHead(200 , {'Content-Type': 'application/csv'})   //Devuelve un JSON
    res.write('id, nombre\n');
    res.write('1, MArtin\n');
    res.write('2, Diaz\n');
    res.write('3, Jose\n');
    res.write('4, Perez\n');


//    res.write('404 | Page not found');

*/
    res.write('Hola Mundo');    //Con res.write, esto se enviara al finalizar la peticion.
    res.end();                  //Con res.end() finaliza la peticion.

})
.listen(8080);

console.log("Escuchando el puerto 8080");