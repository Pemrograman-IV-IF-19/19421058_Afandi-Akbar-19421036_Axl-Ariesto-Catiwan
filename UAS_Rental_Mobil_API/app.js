const express = require ('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const dbConfig = require('./config/DbConfig')


app.use(express.json())
app.use(express.urlencoded({ extended:true }))

mongoose.connect(dbConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Connect mongodb")
}).catch(err =>{
    console.log("Unconnect mongodb")
    console.log(err)
})

app.get("/", (req, res) =>{
    res.json({
        msg: "Selamat Datang di API"
    })
})

app.use('/gambar-mobil', express.static('public/images'))
app.use('/users', require('./routes/userRoutes.js'))
app.use('/mobil', require('./routes/mobilRoutes.js'))
app.use('/kategori', require('./routes/kategoriRoutes.js'))
app.use('/keranjang', require('./routes/keranjangRoutes.js'))
app.use('/transaksi', require('./routes/transaksiRoutes.js'))


app.listen(port, () => {
    console.log("server berjalan di port "+ port)
})