import { Schema, model } from 'mongoose'

const encuestaSchema = new Schema({
    valor: {
        type: Number,
        required: true,
    },
    feedback: {
        type: String,
        required: true
    }
})

export const Encuesta = model('Encuesta', encuestaSchema)