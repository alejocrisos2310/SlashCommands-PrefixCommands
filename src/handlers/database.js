const mongoose = require('mongoose');

module.exports = (client) => {

    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MongoDatabaseURL, () => {
        console.log('megadb listo')
    })
}