import { Encuesta } from '../model/Encuesta.js'

export const datos = async (req, res) => {
    try {
        const {id_usuario} = req.body

        const encuesta = await Encuesta.find({id_usuario})

        if(!encuesta) return res.status(400).json({message: 'no hay encuestas'})

        return res.status(200).json({
            encuesta
        })

    } catch (error) {
        
    }
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