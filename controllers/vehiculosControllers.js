const { request, response} = require('express');
const Vehiculo = require('../models/vehiculo');



// Trae todos los vehiculos
const vehiculosGet = async(req, res = response) => {

    const vehiculos = await Vehiculo.find();
    const totalVehiculos = await Vehiculo.countDocuments();

    res.json({
        totalVehiculos,
        vehiculos
    })
};


//Trae vehiculos con parametros
const vehiculosQuery = async(req = request, res = response)=>{

    const {limite, desde} = req.query;

    const respuesta = await Promise.all([
        Vehiculo.countDocuments(),
        Vehiculo.find().skip(Number(desde)).limit(Number(limite))

    ])

    res.json({respuesta})
};


//Trae vehiculos segun Id
const vehiculosId = async(req, res) => {

    const {id} = req.params;

    const vehiculos = await Vehiculo.findById(id)

    res.json(vehiculos);

}


//Actualizacion de vehiculos
const vehiculosPut = async(req, res = response)=>{

    const {id} = req.params;
    const body = req.body;

    await Vehiculo.findByIdAndUpdate(id, body);

    res.json({body})
    
};


//Crear un nuevo vehiculo
const vehiculosPost =  async(req, res)=>{

    const {vehiculo, marca, ano, descripcion, vendido } = req.body;
    const newVehiculo = new Vehiculo({vehiculo, marca, ano, descripcion, vendido});

    await newVehiculo.save();

    res.json(newVehiculo)
  
};


//Actualiza algunos datos del vehiculo
const vehiculosPatch =  async(req, res)=>{

    const {id} = req.params;

    const {descripcion, vendido} = req.body;

    await Vehiculo.findByIdAndUpdate(id, {descripcion, vendido});

    res.json({
        descripcion,
        vendido
    });
  
};


//Eliminacion fisica de un vehiculo
const vehiculosDelete =  async(req, res)=>{

    const {id} = req.params;

    const vehiculo = await Vehiculo.findByIdAndDelete(id)

    res.json(vehiculo)
  
};




module.exports = {
    vehiculosGet,
    vehiculosQuery,
    vehiculosId,
    vehiculosPut,
    vehiculosPost,
    vehiculosPatch,
    vehiculosDelete
}