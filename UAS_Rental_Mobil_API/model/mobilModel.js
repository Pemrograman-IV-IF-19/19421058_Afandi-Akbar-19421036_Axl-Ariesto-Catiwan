const mongoose = require ('mongoose')
const objectId = mongoose.Types.ObjectId

const mobilModel = new mongoose.Schema({
    namaMobil: {
        type: String
    },
    merkMobil: {
        type: String
    },
    kapasitas:{
        type: String
    },
    harga:{
        type: Number
    },
    idKategori:{
        type: objectId
    },
    gambar:{
        type: String
    }
})

module.exports = mongoose.model('mobil', mobilModel)