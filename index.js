import express from 'express'
import './databse.js'
import cors from 'cors'
import encuestaRoute from './src/routes/encuestaroutes.js'
import authRoute from './src/routes/authRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/encuesta', encuestaRoute)
app.use('/api/auth/', authRoute)

const PORT = 5000

app.listen(PORT, console.log('funciona 😀'))