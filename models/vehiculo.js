
const {Schema, model} = require('mongoose');


const VehiculoSchema = Schema({

    vehiculo:   String,
    marca:     String,
    ano:       Number ,
    descripcion: String,
    vendido:   Boolean,
    created:   Date,
    updated:   Date 

});




module.exports = model( 'Vehiculo', VehiculoSchema);