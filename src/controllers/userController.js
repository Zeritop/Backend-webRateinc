import { User } from '../model/User.js'

const register = async (req, res) => {
    const { email, password } = req.body

    const user = new User({
        email,
        password
    })

    try {
        await user.save()
        res.status(200).json({message: 'usuario registrado'})

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})

    if(!user) return res.status(400).json({message: 'usuario o contrasena invalido'})

    if(user.password !== password) res.status(400).json({message: 'usuario o contrasena invalido'})

    res.status(200).json({message: 'Bienvenido'})
}

export {
    register,
    login
}