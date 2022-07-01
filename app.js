const express = require('express')
const hbs= require('hbs');
require('dotenv').config();

const app = express()
const port=process.env.PORT;

//Servir contenido estatico
app.use(express.static('public'));  //Con esta sentencia va a hacer publica la carpeta "public"

//Handlebars
app.set('view engine', 'hbs');  //Indica que se va a renderizar con HBS.
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) =>{
    //res.send('Hola Mundo');
    res.render('home',{
        nombre: 'Martin Diaz',      //NOMBRE Y APELLIDO SON PARAMETROS QUE LUEGO SE PUEDER USAR EN LOS HTML
        titulo: 'Curso de Node'
    });     //Buca el archivo home de la carpeta VIEWS
})

/*
app.get('/', (req, res) => {
    res.send('Home Page')
})
*/
app.get('/hola-mundo', (req, res) =>{
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('/generic', (req,res)=>{
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic',{
        nombre: 'Martin Diaz',      //NOMBRE Y APELLIDO SON PARAMETROS QUE LUEGO SE PUEDER USAR EN LOS HTML
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req,res)=>{
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements',{
        nombre: 'Martin Diaz',      //NOMBRE Y APELLIDO SON PARAMETROS QUE LUEGO SE PUEDER USAR EN LOS HTML
        titulo: 'Curso de Node'
    });     //Buca el archivo home de la carpeta VIEWS
})

app.get('*', (req, res) => {
    //res.send('404 | Page not found')    //Con res.send esto se enviara al finalizar la peticion.
    res.sendFile(__dirname + '/public/404.html');   //__dirname indica el path donde se esta ejecutando
    /*res.send('Page not Found');*/
})

app.listen(port,()=>{
    console.log('La aplicacion corre en el puerto, ', `${port}`);
})