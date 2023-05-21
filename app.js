const express = require('express')
const app = express()
const cors=require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const clientes = require('./routes/cliente')
const etapa = require('./routes/etapas')
const proyectos = require('./routes/proyecto')
const tipoProyectos = require('./routes/tipoProyecto')
const universidades = require('./routes/universidad')


// middlewares
app.use('/c', clientes)
app.use('/api/etapas', etapa)
app.use('/api/proyecto', proyectos)
app.use('/api/tipoProyecto', tipoProyectos)
app.use('/api/universidad', universidades)

module.exports = app
