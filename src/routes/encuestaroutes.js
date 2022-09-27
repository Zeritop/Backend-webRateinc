import express from 'express'
import { datos, registrar } from '../controllers/encuestaController.js'

const router = express.Router()

router.get('/datos', datos)

router.post('/registrarDato', registrar)


export default router