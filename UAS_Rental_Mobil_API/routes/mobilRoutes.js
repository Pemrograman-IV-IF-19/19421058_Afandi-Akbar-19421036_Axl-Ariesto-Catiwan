const mobilController = require('../controller/mobilController')
const router = require('express').Router()
const utilApps = require ('../utils/utils_apps')
const multer = require ('multer')
const uploadFile = multer({
    storage: utilApps.uploadFile
}).single("gambar")


router.post('/input', uploadFile, (req, res) => {
    if (req.file === undefined){
        res.json({
            status: false,
            msg: 'File tidak boleh kosong'
        })
    } else {
        Object.assign(req.body,{
            gambar: req.file.filename
        })
    }
    mobilController.inputMobil(req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/get-mobil', (req, res) => {
    mobilController.getAllMobil()
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/get-mobil-nama/:namaBarang', (req, res) => {
    mobilController.getMobilByName(req.params.namaMobil)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.get('/get-mobil-id/:id', (req, res) => {
    mobilController.getMobilById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.put('/update-mobil/:id', (req, res) => {
    mobilController.updateMobil(req.params.id, req.body)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.put('/update-gambar/:id', uploadFile, (req, res) => {
    if (req.file === undefined){
        res.json({
            status: false,
            msg: 'File tidak boleh kosong'
        })
    } else {
        req.body.gambar = req.file.filename
    }
    mobilController.updateGambar(req.params.id, req.body.gambar)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

router.delete('/delete/:id', (req, res) => {
    mobilController.deleteMobil(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch(err => {
            res.json(err)
        })
})

module.exports = router