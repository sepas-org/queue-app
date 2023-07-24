const mongoose = require('mongoose')
const { Schema } = require('mongoose')
require('dotenv').config()


const riwayatSchema = new mongoose.Schema({
    nama: String,
    age: Number
})

const Riwayat = mongoose.model('Riwayat', riwayatSchema)

const perform = async ()=>{
    await mongoose.connect(`mongodb+srv://master:${process.env.DB_PASSWORD}@cluster0.ny47xuv.mongodb.net/`)
        .then( async ()=>{
            console.log('Database connected')

            const createdRecord =  await Riwayat.create({ nama: 'Julpan', age: 34 })
            console.log('New record created: ', createdRecord)

            const record = await Riwayat.find()
            console.log(record)
        })
        .catch((err)=>{
            console.error(err)
        })
}



exports.default = perform