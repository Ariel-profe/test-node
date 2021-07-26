const mongoose = require('mongoose');


const db = async() => {

    try {
        
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('Base de datos onLine')


    } catch (error) {
        console.log(error)
        throw new Error('Error en la base de datos')
    }



};





module.exports = {
    db
}