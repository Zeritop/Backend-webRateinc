import mongoose from 'mongoose'

try {
    await mongoose.connect('mongodb+srv://seba:seba123@cluster0.aaj1n.mongodb.net/?retryWrites=true&w=majority')
    console.log('db conect')
} catch (error) {
    console.log(error)
}