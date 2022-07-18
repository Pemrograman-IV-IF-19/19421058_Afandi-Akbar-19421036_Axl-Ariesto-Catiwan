const mongoose = require ('mongoose')
const objectId = mongoose.Types.ObjectId

const keranjangModel = new mongoose.Schema({
    idUser: {
        type: objectId
    },
    idMobil:{
        type: objectId
    },
    tanggalSewa:{
        type: String
    },
    lamaSewaPerhari:{
        type: Number
    },
})

module.exports = mongoose.model('keranjang', keranjangModel)