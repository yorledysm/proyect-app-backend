const {Schema, model} = require('mongoose')

const TipoProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero  requerido'],
        unique: [true, 'Numero en uso']

    },
    titulo: {
        type: String,
        default: true,
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('TipoProyecto', TipoProyectoSchema)

