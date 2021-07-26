const express = require('express');
const cors = require('cors');
const { db } = require('../db/database');




class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.vehiculosRutas = '/vehiculos';

        //Base de datos
        this.conectarDb();

        //Middles
        this.middlewares();

        //Rutas
        this.routes();
    };


    async conectarDb(){
        await db();
    }


    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());


    }

    routes(){
        
        this.app.use( this.vehiculosRutas, require('../routes/vehiculos' ))
          
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server is running on port',this.port)
        })
    }


}



module.exports = Server;