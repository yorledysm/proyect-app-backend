const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Número requerido'],
        unique: [true, 'Numero en uso']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    fechaInicializacion: {
        type: Date
    },
    fechaCreacion: {
        type: Date
    },
    valor: {
        type: Number
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },

    servicio: {
        type: Schema.Types.ObjectId,
        ref: 'Servicio',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    }, 
   universidad:{
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }

   }
})

module.exports = model('Proyecto', ProyectoSchema)