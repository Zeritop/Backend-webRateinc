import { Encuesta } from '../model/Encuesta.js'

export const datos = (req, res) => {

}

export const registrar = async (req, res) => {
    try {
        console.log(req.body)
        const { valor, feedback, id_usuario } = req.body

        let encuesta = new Encuesta({ valor, feedback, id_usuario })

        await encuesta.save()

        return res.status(200).json({ message: 'encuesta guardada' })

    } catch (error) {
        console.log(error)
    }
}