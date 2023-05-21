const Proyecto = require('../models/proyecto')
const { request, response} = require('express')
const Etapas = require('../models/etapas')
const Cliente = require('../models/cliente')
const Universidad = require('../models/universidad')
const TipoProyecto = require('../models/tipoProyecto')







// crear
const createProyectos= async (req = request, 
    res = response) => {
        try{
            const data = req.body
            console.log(data)
            const { cliente, etapas, tipoProyecto, universidad } = data;
            // valida,os la informacion del cliente
            const clienteDB = Cliente.findOne({
                _id: cliente._id,
               
            })
            if(!clienteDB){
                return res.status(400).json({msg: 'Cliente  invalido'})
            }
            // Se  valida etapa
            const etapaDB = Etapas.findOne({
                _id: etapas._id,
                
            })
            if(!etapaDB){
                return res.status(400).json({msg: 'Etapa invalida'})
            }
            // Validando tipo de tipoProyecto
            const tipoProyectoDB = TipoProyecto.findOne({
                _id: tipoProyecto._id,
               
            })
            if(!tipoProyectoDB){
               return res.status(400).json({msg: 'Tipo de proyecto invalido'})
            }
            // validando  la universidad 
            const universidadDB = Universidad.findOne({
                _id: universidad._id,
               
            })
            if(!universidadDB){
               return res.status(400).json({msg: 'Universidad invalida'})
            }      
            const proyecto = new Proyecto(data)
    
            await proyecto.save()
            
            return res.status(201).json(proyecto)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
    }
    
 
//listar todos
const getProyectos = async (req = request, 
    res = response) => {
        try{
            const proyectoDB = await Proyecto.find()
                .populate({
                    path: 'cliente'
                })
                .populate({
                    path: 'etapas'
                })
                .populate({
                    path: 'tipoProyectos'
                })
                .populate({
                    path: 'universidad'
                })

            return res.json(proyectoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}
const updateProyectoByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params
        const data = req.body
        const proyecto  = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


/*
const updateTipoEquipoByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        return res.json(tipoEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

*/












module.exports = {  getProyectos,createProyectos,  updateProyectoByID}