import express from 'express'
import './databse.js'
import cors from 'cors'
import encuestaRoute from './src/routes/encuestaroutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/encuesta', encuestaRoute)

const PORT = 5000

app.listen(PORT, console.log('funciona 😀'))